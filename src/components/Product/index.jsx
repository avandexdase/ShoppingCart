import React, { memo, useContext, useCallback } from 'react';
import { CartContext } from '../../context/cartContext';
import PropTypes from 'prop-types';
import '../../styles/index.scss';

function Product({ product }) {
  const { addItemToCart } = useContext(CartContext);
  const addToCart = () => addItemToCart(product);

  return (
    <div key={product.id} className="product_card">
      <h1 className="product_card__name">{product.name}</h1>
      <img
        src={product.imageURL}
        alt={product.name}
        className="product_card__img"
      />
      <div className="product_card__desc">
        <p className="product_card__desc-content">{product.description}</p>
      </div>
      <div className="product_card__price">
        <span>
          {`MRP ${new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
          }).format(product.price)}
              `}
        </span>

        <button className="product_card__btn" onClick={addToCart}>
          Buy Now
        </button>
      </div>
      <button
        type="button"
        onClick={addToCart}
        className="product_card__sm-btn"
      >
        Buy Now
        <span>
          {`@${new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
          }).format(product.price)}`}
        </span>
      </button>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.exact({
    name: PropTypes.string,
    imageURL: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    stock: PropTypes.number,
    category: PropTypes.string,
    sku: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default memo(Product);
