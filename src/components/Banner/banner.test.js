import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Banner from '../../components/Banner/banner';
import userEvent from '@testing-library/user-event';
const data = [
  {
    bannerImageUrl: '/static/images/offers/offer1.jpg',
    bannerImageAlt: 'Independence Day Deal - 25% off on shampoo',
    isActive: true,
    order: 1,
    id: '5b6c38156cb7d770b7010ccc',
  },
  {
    bannerImageUrl: '/static/images/offers/offer2.jpg',
    bannerImageAlt: 'Independence Day Deal - Rs120 off on surf',
    isActive: true,
    order: 2,
    id: '5b6c38336cb7d770b7010ccd',
  },
];
describe('<Banner />', () => {
  it('renders banner image', () => {
    const { getByAltText } = render(<Banner banner={data} />);
    const image = getByAltText('Independence Day Deal - 25% off on shampoo');
    expect(image).toHaveAttribute('src', '/static/images/offers/offer1.jpg');
  });
  it('test prev-next btn', () => {
    render(<Banner banner={data} />);
    expect(screen.getByTestId('prevBtn')).toBeInTheDocument();
    expect(screen.getByTestId('nextBtn')).toBeInTheDocument();
  });
//   it('test onClick of prev-next btn', () => {
//     const prevslides = jest.fn();
//     render(<Banner banner={data} />);
//     const btn = screen.getByTestId('nextBtn')
//     console.log(btn);
//     userEvent.click(btn);
//     // fireEvent.click(screen.getByTestId("nextBtn"))
//     const user = userEvent.setup();
//     user.click(screen.getByTestId('nextBtn'));
//     expect(prevslides).toBeCalledTimes(1);
//   });
});
