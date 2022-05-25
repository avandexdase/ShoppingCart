import React, { useState, useCallback, useEffect, useContext } from 'react';
import Categories from '../../components/Banner/categories';
import axiosInstance from '../../utils/axiosInstance';
import Banner from '../../components/Banner/banner';
import '../../styles/_home.scss';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

function Home() {
  const [products, setProducts] = useState([]);
  const [bannersData, setBannersData] = useState([]);
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);
  const loadData = useCallback(async () => {
    try {
      const bannerRes = await axiosInstance.get('banners');
      setBannersData(bannerRes.data);
      const res = await axiosInstance.get('categories');
      setProducts(res.data);
    } catch (error) {}
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div data-testid="homePage">
      <div data-testid="homeBanner">
        <Banner banner={bannersData} />
      </div>
      <div className="home_page" data-testid="homeProducts">
        {products.map((each, index) => (
          <Categories key={each.id} data={each} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Home;
