import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '../../assets/icons/shopping_cart.svg';

function Header() {
  return (
    <header className="flex p-4 shadow-md items-end">
      <div>
        <img
          src="../../../static/images/logo.png"
          alt="logo"
          className="max-w-[75%]"
        />
      </div>
      <nav className="flex-1 px-8 hidden md:block pb-3">
        <ul className="flex gap-4">
          <li className="text-xl">
            <Link to="/home" className="hover:no-underline">
              Home
            </Link>
          </li>
          <li className="text-xl">
            <Link to="/products" className="hover:no-underline">
              Products
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-4 pb-3">
        <div className="hidden md:block text-xl">
          <Link to="/" className="hover:no-underline">
            Sign In
          </Link>
        </div>
        <div className="hidden md:block text-xl">
          <Link to="/register" className="hover:no-underline">
            Register
          </Link>
        </div>
        <div className="flex gap-2">
          <div className="sr-only">Cart</div>
          <ShoppingCartIcon height={24} width={24} fill="green" />
          <span className="text-xl">0 Items</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
