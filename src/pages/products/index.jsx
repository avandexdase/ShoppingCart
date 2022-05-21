import React, { useEffect, useCallback, useState, useContext } from 'react';
import Product from '../../components/Product';
import CategoriesType from '../../components/Product/categoriesType';
import axiosInstance from '../../utils/axiosInstance';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

function Products() {
  const location = useLocation();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [filteredProductData, setfilteredProductData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const { isAuthenticated } = useContext(AuthContext);
  const loadData = useCallback(async () => {
    let res = {};
    let category = {};
    try {
      if (isAuthenticated) {
        res = await axiosInstance.get('products');
        category = await axiosInstance.get('categories');
        setCategoryData(category.data);
        setProducts(res.data);
        if (location.state?.id)
          loadfilteredProductDataOnPageLoad(
            location.state.id,
            res.data,
            category.data
          );
        else setfilteredProductData(res.data);
      } else navigate('/');
    } catch (error) {}
  }, []);
  const selectCategoryName = (id, categoryData) => {
    const name = categoryData.find((each) => each.id === id).name;
    setSelectedCategory(name);
  };
  const loadfilteredProductDataOnPageLoad = (id, product, categoryData) => {
    const filteredData = product.filter((each) => each.category === id);
    setfilteredProductData(filteredData);
    selectCategoryName(id, categoryData);
  };
  const loadCondProductData = (id) => {
    let filteredData = [];
    if (id === 0) {
      filteredData = products;
      setSelectedCategory('');
    } else {
      filteredData = products.filter((each) => each.category === id);
      selectCategoryName(id, categoryData);
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
      {filteredProductData.length > 0 ? (
        <div className="product">
          {filteredProductData.map((item) => (
            <Product key={item.id} product={item} />
          ))}
        </div>
      ) : (
        <div className="NoProduct">No product available</div>
      )}
    </div>
  );
}

export default Products;
