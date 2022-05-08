import React, { useState, useCallback, useEffect } from 'react';
import Categories from '../../components/Banner/categories';
import { ThemeContext } from '../../context/themeContext';
import axiosInstance from '../../utils/axiosInstance';
import Banner from '../../components/Banner/banner';

function Home() {
  const [products, setProducts] = useState([]);
  const [bannersData, setBannersData] = useState([]);

  const loadData = useCallback(async () => {
    try {
      console.log('rnder callback');
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
      <div className="grid grid-cols-1 gap-10 mx-6">
        {products.map((each) => (
          <Categories key={each.id} data={each} />
        ))}
      </div>
    </>
  );
}

export default Home;
