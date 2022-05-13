import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import ShoppingCartIcon from '../../assets/icons/shopping_cart.svg';
import logo from '../../../static/images/logo.png';
import logo2x from '../../../static/images/logo_2x.png';
import CartDropdown from '../Cart-Dropdown/cart-dropdown';
import { CartContext } from '../../context/cartContext';
function Header() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <picture>
            <source srcSet={logo} media="(min-width: 600px)" />
            <img src={logo2x} alt="Logo" className="logoImg" />
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
          <div id="dropdowncart" className="sign-nav-cart" onClick={toggleIsCartOpen}>
            {/* <ShoppingCartIcon height={24} width={24} fill="green" /> */}
            <span>{`${cartCount}Items`}</span>
          </div>
          <div id="cart" className="sign-nav-cart">
            {/* <ShoppingCartIcon height={24} width={24} fill="green" /> */}
            <Link to="/cart">{`${cartCount}Items`}</Link>
          </div>
        </div>
        <div className='sign-nav-cartDropdown'>{isCartOpen && <CartDropdown />}</div>
      </div>
    </header>
  );
}
export default Header;
