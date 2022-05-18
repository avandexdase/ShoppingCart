import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import CartItem from '../Cart/cartItem';
import '../../styles/index.scss';
import { useNavigate } from 'react-router-dom';
import CartFooter from '../Cart/cartFooter';
import LowestPriceBanner from '../Cart/lowestPriceBanner';
import Close from '../../icons/close';

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems, isCartOpen, setIsCartOpen, cartTotalValue } =
    useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  const navigateToCart = () => {
    toggleIsCartOpen();
    navigate('/cart');
  };
  const startShopping = () => {
    toggleIsCartOpen();
    navigate('/home');
  };
  return (
    <div className="cart-dropdown">
      <header>
        <div className="cart-dropdown__header">
          <h2>
            My Cart
            {cartItems.length > 0 ? (
              <span className="cart-dropdown__quantity">{`(${cartItems.length} item)`}</span>
            ) : (
              ''
            )}
          </h2>

          <button
            className="cart-dropdown__closeBtn"
            onClick={toggleIsCartOpen}
          >
            <Close />
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

        {cartItems.length > 0 && <LowestPriceBanner />}
      </div>
      <CartFooter
        cartItems={cartItems}
        startShopping={startShopping}
        navigateToCart={navigateToCart}
        cartTotalValue={cartTotalValue}
      />
    </div>
  );
};

export default CartDropdown;
