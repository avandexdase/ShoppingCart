import React from 'react';
import {
  screen,
  render,
  waitFor,
  cleanup,
  waitForElement,
} from '@testing-library/react';
import Banner from '../../components/Banner/banner';
import '@testing-library/jest-dom';
import axios from 'axios';
jest.mock('axios');

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
  afterEach(cleanup);
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
  it('renders home page correctly', async () => {
    axios.get.mockResolvedValue({
      data,
    });
    const { getByTestId, asFragment } = render(<Banner banner={data} />);
    const listNode = await waitFor(() => getByTestId('banner'));
    expect(listNode.children).toHaveLength(4);
    expect(asFragment()).toMatchSnapshot();
  });
});
