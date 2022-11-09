import React, { useState } from 'react';
import classNames from 'classnames';

import './Nominee.css'; 

const Nominee = ({ nomineesSelected, category, handleNomineeSelected, nominee }) => {
   
    const [hover, setHover] = useState(false);; 

    const { title, photoUrL }= nominee; 
    console.log(nominee)

    const handleSelected = nomineesSelected[category.id] === nominee.id;
    
    const handleClick= () =>{
        handleNomineeSelected(nominee); 
    }; 
    const handleMouseHover = ()=> {
        setHover((hover)=> !hover); 
    }; 

    return (
    <>
    <div className={classNames('nominee', {
        'nominee--selected':handleSelected,
        'nominee--hovered':hover,
    })}
    onMouseEnter={handleMouseHover}
    onMouseLeave={handleMouseHover}
    >
            <h3 className='nominee' title={title}>
                {title}
            </h3>
            <img className='nominee_image' src={photoUrL} alt={title} />
            <button onClick={handleClick}>Select</button>

    </div>
    </>
  )
}

export default Nominee;