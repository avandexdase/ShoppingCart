import React from 'react';

function CartFooter({cartItems, startShopping, navigateToCart, cartTotalValue}) {
    console.log(cartItems);
  return (
    <>
      {cartItems.length > 0 ? (
        <footer className="cart-dropdown__footer">
          <p className="cart-dropdown__promo">
            Promocode can be applied on payment page
          </p>
          <div className="cart-dropdown__Checkoutbtn" onClick={navigateToCart}>
            <p className="cart-dropdown__CheckoutbtnDesc">
              Proceed to Checkout
            </p>
            <p className="cart-dropdown__CheckoutbtnDesc">{`Rs.${cartTotalValue}`}</p>
          </div>
        </footer>
      ) : (
        <footer>
          <div className="cart-dropdown__Checkoutbtn" onClick={startShopping}>
            start shopping
          </div>
        </footer>
      )}
    </>
  );
}

export default CartFooter;
