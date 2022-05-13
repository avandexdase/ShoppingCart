import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import CartItem from '../Cart/cartItem';
import '../../styles/index.scss';
import { useNavigate } from 'react-router-dom';
import CartFooter from '../Cart/cartFooter';

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems, isCartOpen, setIsCartOpen, cartTotalValue } =
    useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  const navigateToCart = () => {
    toggleIsCartOpen();
    navigate('/cart');
  };
  return (
    <div className="cart-dropdown">
      <header>
        <div className="cart-dropdown__header">
          <h2>Cart</h2>
          <button
            className="cart-dropdown__closeBtn"
            onClick={toggleIsCartOpen}
          >
            &#10060;
          </button>
        </div>
      </header>
      <div className="cart-dropdown__items">
        {cartItems.length ? (
          cartItems.map(
            (cartItem) =>
              cartItem && <CartItem key={cartItem.id} cartItem={cartItem} />
          )
        ) : (
          <span className="cart-dropdown__message">Your cart is empty</span>
        )}

        <CartFooter />
      </div>
      {cartItems.length > 0 ? (
        <footer className="cart-dropdown__footer">
          <p className="cart-dropdown__promo">
            Promocode can be applied on payment page
          </p>
          <div className="cart-dropdown__Checkoutbtn" onClick={navigateToCart}>
            <p>Proceed to Checkout</p>
            <p>{cartTotalValue}</p>
          </div>
        </footer>
      ) : (
        <footer>
          <div className="cart-dropdown__Checkoutbtn" onClick={navigateToCart}>
            start shopping
          </div>
        </footer>
      )}
    </div>
  );
};

export default CartDropdown;
