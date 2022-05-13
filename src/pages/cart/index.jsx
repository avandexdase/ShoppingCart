import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import CartItem from '../../components/Cart/cartItem';
import '../../styles/index.scss';
import CartFooter from '../../components/Cart/cartFooter';

export default function Cart() {
  const { cartItems, cartTotalValue } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div className="">
      <header>
        <div className="cart-dropdown__header">
          <h2>Cart</h2>
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

        <CartFooter />
      </div>
      {cartItems.length > 0 ? (
        <footer className="cart-dropdown__footer">
          <p className="cart-dropdown__promo">
            Promocode can be applied on payment page
          </p>
          <div className="cart-dropdown__Checkoutbtn">
            <p>Proceed to Checkout</p>
            <p>{cartTotalValue}</p>
          </div>
        </footer>
      ) : (
        <footer className="cart-dropdown__footer">
          {' '}
          <div className="cart-dropdown__Checkoutbtn">start shopping</div>
        </footer>
      )}
    </div>
  );
}
