import { render, screen } from '@testing-library/react';

import Category from '../Category'; 

const handleNomineeSelected = jest.fn(); 
const nomineesSelected = jest.fn(); 

const category = {
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
        <Category
         handleNomineeSelected={handleNomineeSelected}
         nomineesSelected={nomineesSelected}
         category ={category}
         />
    );
};

describe('Category', ()=>{
    it('should render to the ui well', ()=>{
        isComponentRendered(); 


        const title = screen.queryAllByRole('heading', { level: 2});
        const nomineesPicked = screen.queryAllByRole('heading', {level:3}); 
    
        expect(title).toHaveLength(1);
        expect(nomineesPicked).toHaveLength(4)
    });
}); 


