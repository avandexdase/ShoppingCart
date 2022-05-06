import React, { useEffect, useCallback, useState } from 'react';
import Product from '../../components/Product';
import { ThemeContext } from '../../context/themeContext';
import axiosInstance from '../../utils/axiosInstance';

function Products() {
  const [products, setProducts] = useState([]);
  //
  const loadData = useCallback(async () => {
    try {
      console.log('rnder callback');
      const res = await axiosInstance.get('products');
      setProducts(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const addToCart = useCallback(() => {
    console.log('add to cart');
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <>
      <ThemeContext.Consumer>
        {(value) => (
          <p>
            Current Theme is
            {value.theme}
          </p>
        )}
      </ThemeContext.Consumer>
      <div className="grid grid-cols-auto-fit gap-4">
        {products.map((item) => (
          <Product key={item.id} product={item} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
}

export default Products;
