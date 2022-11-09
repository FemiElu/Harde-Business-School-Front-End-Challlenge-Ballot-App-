import React from 'react';
import Nominee from './Nominee';

import './NomineeList.css'; 


const NomineeList = ({ nominees, category, nomineesSelected, handleNomineeSelected}) => {
  
    return (
        <>
    <main className='nominee-list'>
        {nominees.map((items)=> { 
            return (
                <Nominee 
                key={items.id}
                category={category}
                nominee={items}
                handleNomineeSelected={handleNomineeSelected}
                nomineesSelected={nomineesSelected} 
                />
            )
        })}
    </main>
    </>
  )
}

export default NomineeList