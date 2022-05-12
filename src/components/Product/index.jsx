import React, { memo } from 'react';
import PropTypes from 'prop-types';
import '../../styles/index.scss'

function Product({ product, addToCart }) {
  return (
    <div
      key={product.id}
      className="product_card"
    >
      <h1 className="product_card__name">{product.name}</h1>
      <img
        src={product.imageURL}
        alt={product.name}
        className="product_card__img"
      />
      <div className="product_card__desc">
        <p className="product_card__desc-content">{product.description}</p>
      </div>
      <div className="product_card__btn">
        {`MRP ${new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: 'INR',
        }).format(product.price)}
              `}
      </div>
      <button type="button" onClick={addToCart} className="product_card__sm-btn">
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
  addToCart: PropTypes.func.isRequired,
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
