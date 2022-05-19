import React, { useContext } from 'react';
import '../../styles/cartItem.scss';
import { CartContext } from '../../context/cartContext';
import MinusSign from '../../icons/minus';
import PlusSign from '../../icons/plus';

function CartItem({ cartItem }) {
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);
  return (
    <div className="cartItem">
      <img
        src={cartItem.imageURL}
        alt={cartItem.sku}
        className="cartItem__img"
      />
      <div className="cartItem__details">
        <h3 className="cartItem__name" data-testid="cartItemName">{cartItem.name}</h3>
        <div className="cartItem__desc">
          <div>
            <button
              className="cartItem__btn"
              data-testid="decrementCartBtn"
              onClick={() => removeItemFromCart(cartItem)}
            >
              <MinusSign />
            </button>
            <span className="cartItem__quantity" data-testid="cartQuantity">{cartItem.quantity}</span>
            <button
              className="cartItem__btn"
              data-testid="incrementCartBtn"
              onClick={() => addItemToCart(cartItem)}
            >
              <PlusSign />
            </button>
            <span className="cartItem__remove">x</span>
            <span className="cartItem__price">{`Rs.${new Intl.NumberFormat(
              'en-IN',
              {
                style: 'currency',
                currency: 'INR',
              }
            ).format(cartItem.price)}`}</span>
          </div>
          <div>
            <span className="cartItem__total">{`Rs.${
              cartItem.quantity * cartItem.price
            }`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
