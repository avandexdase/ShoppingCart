import React, { memo } from 'react';
import PropTypes from 'prop-types';

function Product({ product, addToCart }) {
  return (
    <div
      key={product.id}
      className="grid grid-cols-2 grid-rows-[60px_200px_100px_0px] sm:grid-rows-[60px_200px_100px_40px] md:grid-rows-[60px_300px_100px_50px]"
    >
      <h1 className="col-span-2 truncate text-xl p-2">{product.name}</h1>
      <img
        src={product.imageURL}
        alt={product.name}
        className="row-span-3 sm:row-span-2 md:row-span-1 md:col-span-2"
      />
      <div className="bg-gray-300 md:col-span-2 p-2">
        <p className="line-clamp-3">{product.description}</p>
      </div>
      <div className="hidden md:block">
        {`MRP ${new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: 'INR',
        }).format(product.price)}
              `}
      </div>
      <button type="button" onClick={addToCart} className="sm:col-span-2">
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
