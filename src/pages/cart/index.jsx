import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import CartItem from '../../components/Cart/cartItem';
import '../../styles/index.scss';
import CartFooter from '../../components/Cart/cartFooter';
import LowestPriceBanner from '../../components/Cart/lowestPriceBanner';

export default function Cart() {
  const { cartItems, cartTotalValue } = useContext(CartContext);
  const navigate = useNavigate();
  const navigateToCart = () => {};
  const startShopping = () => {
    navigate('/home');
  };
  return (
    <div className="cart">
      <header>
        <div className="cart-dropdown__header">
          <h2>
            My Cart
            {cartItems.length > 0 ? (
              <span className='cart-dropdown__quantity'>{`(${cartItems.length} item)`}</span>
            ) : (
              ''
            )}
          </h2>
          <button
            className="cart-dropdown__closeBtn"
            onClick={() => navigate(-1)}
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
}
