import React from 'react'; 
import Category from './Category';



const CategoryList = ({ categories, nomineesSelected, handleNomineeSelected }) => {
  return (
    <>
    <main className='category-list'>
        {categories.map((category)=>{
           return  <Category
            key={category.id} 
            category= {category}
            nomineesSelected= {nomineesSelected}
            handleNomineeSelected = {(nominee) => {
                handleNomineeSelected(category, nominee);
            }} 
            />
        })}
    </main>
    </>
  )
}

export default CategoryList