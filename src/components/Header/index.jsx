import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '../../assets/icons/shopping_cart.svg';

function Header() {
  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <picture>
            <source
              srcset="../../../static/images/logo.png"
              media="(min-width: 600px)"
            />
            <img
              src="../../../static/images/logo.png"
              alt="Logo"
              class="logoImg"
            />
          </picture>
        </div>
        <nav className="">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>
          </ul>
        </nav>
        <div className="">
          <ul class="nav-list">
            <li class="nav-item">
              <Link to="/" className="nav-link">
                Sign In
              </Link>
            </li>
            <li class="nav-item">
              {' '}
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
          </ul>
          <div className="">
            <ShoppingCartIcon height={24} width={24} fill="green" />
            <span className="">0 Items</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
