import React, { useContext } from 'react';
import '../../styles/cartItem.scss';
import { CartContext } from '../../context/cartContext';

function CartItem({ cartItem }) {
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);
  return (
    <div className="cartItem">
      <img src={cartItem.imageURL} alt={cartItem.sku} className="cartItem__img" />
      <div className="cartItem__desc">
        <h3 className="cartItem__name">{cartItem.name}</h3>
        <div>
          <button
            className="cartItem__btn"
            onClick={() => removeItemFromCart(cartItem)}
          >
            &#x2D;
          </button>
          <span className="cartItem__quantity">{cartItem.quantity}</span>
          <button
            className="cartItem__btn"
            onClick={() => addItemToCart(cartItem)}
          >
            +
          </button>
          <span className="cartItem__remove">x</span>
          <span className="cartItem__price">{`Rs.${new Intl.NumberFormat(
            'en-IN',
            {
              style: 'currency',
              currency: 'INR',
            }
          ).format(cartItem.price)}`}</span>
          <span className="cartItem__total">{`${
            cartItem.quantity * cartItem.price
          }`}</span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
