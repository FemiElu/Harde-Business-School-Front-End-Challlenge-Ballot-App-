import { render, screen } from '@testing-library/react';

import CategoryList from '../CategoryList';

const handleNomineeSelected = jest.fn(); 
const nomineesSelected = jest.fn(); 

const categories = {
        id: "best-picture",
        items: [
          {
            title: 'Nomadland',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg',
            id: 'nomadland'
          },
          {
            title: 'The Trial of the Chicago 7',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/trial_of_the_chicago_seven.jpg',
            id: 'the-trial-of-the-chicago-7'
          },
        ],
            title: 'Minari',
}; 


const isComponentRendered = ()=>{
    render(
        <CategoryList
         handleNomineeSelected={handleNomineeSelected}
         nomineesSelected={nomineesSelected}
         categories ={categories}
         />
    );
};

describe('Category', ()=>{
    it('should render to the ui well', ()=>{
        isComponentRendered(); 


        const categories = screen.queryAllByRole('heading', { level: 2});
        const nomineesPicked = screen.queryAllByRole('heading', {level:3}); 
    
        expect(categories).toHaveLength(2);
        expect(nomineesPicked).toHaveLength(4)
    });
});


