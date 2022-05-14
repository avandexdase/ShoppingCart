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
  const [filteredProductData, setfilteredProductData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const loadData = useCallback(async () => {
    let res = {};
    let category = {};
    try {
      res = await axiosInstance.get('products');
      category = await axiosInstance.get('categories');
      setCategoryData(category.data);
      setProducts(res.data);
      if (location.state?.id)
        loadfilteredProductDataOnPageLoad(location.state.id, res.data, category.data);
      else setfilteredProductData(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const loadfilteredProductDataOnPageLoad = (id, product, category) => {
    const filteredData = product.filter((each) => each.category === id);
    console.log(filteredData);
    setfilteredProductData(filteredData);
    setSelectedCategory(category.find((each) => each.id == id).name);
  };
  const loadCondProductData = (id) => {
    let filteredData = [];
    if (id === '') {
      filteredData = products;
      setSelectedCategory('');
    } else {
      filteredData = products.filter((each) => each.category === id);
      setSelectedCategory(categoryData.find((each) => each.id == id).name);
    }
    setfilteredProductData(filteredData);
  };

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div className="productPage">
      <div className="categoryType">
        <CategoriesType
          data={categoryData}
          loadCondProductData={loadCondProductData}
          selectedCategory={selectedCategory}
        />
      </div>
      <div className="product">
        {filteredProductData.map((item) => (
          <Product key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
