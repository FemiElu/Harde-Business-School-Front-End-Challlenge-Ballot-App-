import React from 'react'; 
import './Category.css'; 
import NomineeList from '../NomineeSection/NomineeList'; 

const Category = ({ category, nomineesSelected, handleNomineeSelected}) => {
  
  const { title, items } = category; 


  return (
    <>
    <main className='category'>
    <h2>{title}</h2>
    <NomineeList 
      nominees = {items}
      category={category}
      nomineesSelected={nomineesSelected}
      handleNomineeSelected={handleNomineeSelected}
      />
      </main>
    </>
  )
}

export default Category