import React from 'react';

function Cart() {
  return (
    <div>
      <div>
        <h2>Cart</h2>
        <button>&#10060;</button>
      </div>
      <div>
        <div>
          <h4>No item in your cart</h4>
          <span>Your favourite items are just one click away</span>
        </div>
      </div>
      <button>Start Shopping</button>
      <div>
        <span>Promocode can be applied on payment page</span>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
