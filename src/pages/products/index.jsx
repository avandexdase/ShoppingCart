import React, { useEffect, useCallback, useState } from 'react';
import Product from '../../components/Product';
import CategoriesType from '../../components/Product/categoriesType';
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
    <div className="">
      <div className="">
        <CategoriesType />
      </div>
      <div className="">
        {products.map((item) => (
          <Product key={item.id} product={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Products;
