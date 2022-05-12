import React, { useState, useCallback, useEffect } from 'react';
import Categories from '../../components/Banner/categories';
import { ThemeContext } from '../../context/themeContext';
import axiosInstance from '../../utils/axiosInstance';
import Banner from '../../components/Banner/banner';
import '../../styles/_home.scss'

function Home() {
  const [products, setProducts] = useState([]);
  const [bannersData, setBannersData] = useState([]);

  const loadData = useCallback(async () => {
    try {
      const bannerRes = await axiosInstance.get('banners');
      setBannersData(bannerRes.data);
      const res = await axiosInstance.get('categories');
      setProducts(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <>
      <Banner banner={bannersData}/>
      <div className="home_page">
        {products.map((each, index) => (
          <Categories key={each.id} data={each} index={index}/>
        ))}
      </div>
    </>
  );
}

export default Home;
