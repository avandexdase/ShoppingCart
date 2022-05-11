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
    <div className="md:grid md:grid-cols-5 sm:block">
      <div className="grid-start-1 grid-span-1 bg-neutral-200">
        <CategoriesType />
      </div>
      <div className="col-span-4 grid md:grid-cols-4 sm:grid-cols-2 gap-4 px-6 py-6">
        {products.map((item) => (
          <Product key={item.id} product={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Products;
