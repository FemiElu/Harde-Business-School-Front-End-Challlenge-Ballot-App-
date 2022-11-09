import React, { useState, useEffect } from 'react';
import { getInitialNominees, areAllNomineesSelected } from '../../Utils/helpers';

import CategoryList from '../CategorySection/CategoryList';

import './Ballot.css'; 

import Api from '../../Api/Api'; 




const Ballot = ({setDisplayModal}) => {
  
  const [data, setData] = useState([]); 
  const [nomineesSelected, setNomineesSelected] = useState({}); 
  
  
  useEffect(()=>{
    Api.getBallotData().then(({items})=>{
      setData(items); 
      // console.log(items); 
      setNomineesSelected(getInitialNominees(items));
    });
  },[]);
  
  
  const handleNomineeSelected = (category, nominee) =>{
    setNomineesSelected((prevNomineesSelected)=>{
      return {
        ...prevNomineesSelected, [category.id]:nominee.id, 
      }; 
    }); 
  }; 
  
  const handleNomineeSubmited = ()=>{
    setDisplayModal(nomineesSelected); 
  }; 
  
const isButtonEnabled = areAllNomineesSelected(nomineesSelected); 



  return (
    <div className='ballot'>
     <CategoryList
        categories={data}
        nomineesSelected={nomineesSelected}
        handleNomineeSelected={handleNomineeSelected}
        />

        <button
         type='button'
          className='ballot_btn'
          disabled={!isButtonEnabled}
          onClick={handleNomineeSubmited}
          > Submit</button>
    </div>
  )
}

export default Ballot;