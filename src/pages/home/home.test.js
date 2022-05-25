import React from 'react';
import {
  screen,
  render,
  waitFor,
  shallow,
  fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './index';
import Banner from '../../components/Banner/banner';
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
it('axios spy and rendering test', async () => {
  const spyAxios = jest.spyOn(axios, 'get').mockResolvedValue({
    data,
  });

  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  await waitFor(() => {
    expect(screen.getByTestId('homePage')).toBeInTheDocument();
  });
  //   expect(spyAxios).toHaveBeenNthCalledWith(1, 'http://localhost:9000/banners', {
  //     params: {},
  //   });
});

