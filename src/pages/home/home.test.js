import React from 'react';
import {
  screen,
  render,
  waitFor,
  cleanup,
  waitForElement,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './index';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
const data = [
  {
    bannerImageUrl: '/static/images/offers/offer1.jpg',
    bannerImageAlt: 'Independence Day Deal - 25% off on shampoo',
    isActive: true,
    order: 1,
    id: '5b6c38156cb7d770b7010ccc',
  },
];
jest.mock('axios');
describe('<Home/>', () => {
  it('home page is rendered', async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(screen.getByTestId('homePage')).toBeInTheDocument();
      expect(screen.getByTestId('homeProducts')).toBeInTheDocument();
    });
  });
  jest.mock('axios');
  afterEach(cleanup);
  it('renders hello page correctly', async () => {
    axios.get.mockResolvedValue({
      data,
    });
    const { getByTestId, asFragment } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const listNode = getByTestId('homePage');
    expect(listNode.children).toHaveLength(2);
    expect(asFragment()).toMatchSnapshot();
  });
});
