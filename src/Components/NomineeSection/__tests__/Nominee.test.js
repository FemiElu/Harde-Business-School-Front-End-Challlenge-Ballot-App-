import { render, screen, fireEvent } from '@testing-library/react';
import Nominee from '../Nominee';


const handleNomineeSelected = jest.fn();
const selectedNomimees = jest.fn();
 

const category = {
  id: 'best-visual-effects',
  items: [
    {
      title: 'The Midnight Sky',
      photoUrL:
        'https://variety.com/wp-content/uploads/2020/12/midnight_sky_ver2.jpg',
      id: 'midnight-sky',
    },
    {
      title: 'Tenet',
      photoUrL: 'https://variety.com/wp-content/uploads/2020/12/tenet_ver7.jpg',
      id: 'tenet',
    },
  ],
  title: 'Best Visual Effects',
};

const nominee = category.items[0];

const renderComponent = () => {
  render(
    <Nominee
      handleNomineeSelected={handleNomineeSelected}
      selectedNomimees={selectedNomimees}
      category={category}
      nominee={nominee}
    />
  );
};

describe('Nominee', () => {
  it('renders properly', () => {
    renderComponent();

    const text = screen.getByText(/The Midnight Sky/i);
    const image = screen.getByRole('img');
    const button = screen.getByText(/Select/i);

    expect(text).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(image).toHaveAttribute(
      'src',
      'https://variety.com/wp-content/uploads/2020/12/midnight_sky_ver2.jpg'
    );
    expect(image).toHaveAttribute('alt', 'The Midnight Sky');
  });

  it('shoultd invoke handleNomineeSelected when button is clicked', () => {
    renderComponent();

    const button = screen.getByText(/Select/i);

    fireEvent.click(button);

    expect(handleNomineeSelected).toHaveBeenCalledTimes(1);
    expect(handleNomineeSelected).toHaveBeenCalledWith(nominee);
  });
});
