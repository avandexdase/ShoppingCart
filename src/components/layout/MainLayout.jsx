import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <div className="px-2.5 py-2.5 bg-stone-200">
        <span>
          Copyright &#169; 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
        </span>
      </div>
    </>
  );
}

export default MainLayout;
