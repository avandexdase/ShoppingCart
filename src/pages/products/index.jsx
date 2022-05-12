import React, { useEffect, useCallback, useState } from 'react';
import Product from '../../components/Product';
import CategoriesType from '../../components/Product/categoriesType';
import { ThemeContext } from '../../context/themeContext';
import axiosInstance from '../../utils/axiosInstance';
import { useLocation } from 'react-router-dom';

function Products() {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  //
  const loadData = useCallback(async () => {
    let res = {};
    let category = {};
    try {
      if (location?.state?.id) {
        res = await axiosInstance.get(`products?category=${location.state.id}`);
      } else {
        res = await axiosInstance.get('products');
      }
      category = await axiosInstance.get('categories');
      setCategoryData(category.data)
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
    <div className="productPage">
      <div className="categoryType">
        <CategoriesType data={categoryData}/>
      </div>
      <div className="product">
        {products.map((item) => (
          <Product key={item.id} product={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Products;
