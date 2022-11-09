import React, { useEffect } from 'react';

import './ResultsModal.css'; 

const ResultsModal = ({ closeModal }) => {

    useEffect(()=>{

       
        const onEscape= (event)=> {
            let esc = event.which 
            if (esc === 27) {  // 27 is the ESC key
              closeModal(); 
            }; 
          }; 
          document.addEventListener('keydown', onEscape); 

          return ()=>document.removeEventListener('keydown', onEscape); 

    }); 

  return (
    <>
     <div className='modal' role='dialog' aria-modal='true'>
        <div className='modal-content'>SUCCESS!</div>
        <span className='close' onClick={closeModal}> X</span>
     </div>
    </>
  )
}

export default ResultsModal