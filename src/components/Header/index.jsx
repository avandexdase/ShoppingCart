
import React from 'react';
import { Link } from 'react-router-dom';
// import ShoppingCartIcon from '../../assets/icons/shopping_cart.svg';
import logo from '../../../static/images/logo.png'
import logo2x from '../../../static/images/logo_2x.png'
function Header() {
  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <picture>
            <source
              srcSet={logo}
              media="(min-width: 600px)"
            />
            <img
              src={logo2x}
              alt="Logo"
              className="logoImg"
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
        <div className="sign-list">
          <ul className="sign-nav-list">
            <li className="sign-nav-item">
              <Link to="/" className="sign-nav-link">
                SignIn
              </Link>
            </li>
            <li className="sign-nav-item">
              {' '}
              <Link to="/register" className="sign-nav-link">
                Register
              </Link>
            </li>
          </ul>
          <div id="cart" className="">
            {/* <ShoppingCartIcon height={24} width={24} fill="green" /> */}
            <span className="">0 Items</span>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;