import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CategoriesType() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="px-10 py-10">
      <div className="">
        <div
          className={`accordion-title md:hidden ${
            isActive ? 'hidden' : ''
          } `}
          onClick={() => {
            debugger;
            setIsActive(!isActive);
          }}
        >
          <div>title</div>
        </div>

        <ul
          className={`divide-y divide-slate-200 md:block ${
            isActive ? '' : 'hidden'
          } `}
          onClick={() => setIsActive(!isActive)}
        >
          <li className="text-xl px-4 py-4">
            <Link to="/products" className="hover:no-underline">
              Beverages
            </Link>
          </li>
          <li className="text-xl px-4 py-4">
            <Link to="/products" className="hover:no-underline">
              Bakery Cakes and Dairy
            </Link>
          </li>
          <li className="text-xl px-4 py-4">
            <Link to="/products" className="hover:no-underline">
              Beauty and Hygiene
            </Link>
          </li>
          <li className="text-xl px-4 py-4">
            <Link to="/products" className="hover:no-underline">
              Baby Care
            </Link>
          </li>
          <li className="text-xl px-4 py-4">
            <Link to="/products" className="hover:no-underline">
              Fruits & Vegetables
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CategoriesType;
