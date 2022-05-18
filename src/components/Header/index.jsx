import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartDropdown from '../Cart-Dropdown/cart-dropdown';
import { CartContext } from '../../context/cartContext';
import Cart from '../../icons/shoppingCart';
function Header() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <picture>
            <source
              srcSet="'../../../static/images/logo.png"
              media="(min-width: 1024px)"
            />
            <img
              src="../../../static/images/logo_2x.png"
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
              <Link to="/register" className="sign-nav-link">
                Register
              </Link>
            </li>
          </ul>
          <div
            id="dropdowncart"
            className="sign-nav-cart"
            onClick={toggleIsCartOpen}
          >
            {/* <img
              alt="cartLogo"
              src="../../../static/images/shoppingcart.svg"
              className="sign-nav-cart-log0"
            /> */}

            <Cart />
            <span>{`${cartCount}Items`}</span>
          </div>
        </div>
        <div className="sign-nav-cartDropdown">
          {isCartOpen && <CartDropdown />}
        </div>
      </div>
    </header>
  );
}
export default Header;
