import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
function Categories({ data, index }) {
  const navigate = useNavigate();
  const handleSubmit = (each) => {
    navigate('/products', { state: { id: each.id } });
  };
  return (
    <div key={data.id} className="home_categories">
      <img
        className="home_categories__img"
        src={data.imageUrl}
        alt={data.name}
        data-testid="homecategoryImg"
      />
      {/* <div className="col-start-4 col-span-1 sm:hidden"></div> */}
      <div className="home_categories__Item">
        <h2 className="home_categories__Name" data-testid="homecategoryName">
          {data.name}
        </h2>
        <p className="home_categories__desc" data-testid="homecategoryDesc">
          {data.description}
        </p>
        <button
          className="home_categories__explorebtn"
          onClick={() => handleSubmit(data)}
        >
          {`explore ${data.key}`}
        </button>
      </div>
    </div>
  );
}

Categories.propTypes = {
  data: PropTypes.exact({
    name: PropTypes.string,
    key: PropTypes.string,
    description: PropTypes.string,
    enabled: PropTypes.bool,
    order: PropTypes.number,
    imageUrl: PropTypes.string,
    id: PropTypes.string,
  }),
  index: PropTypes.number,
};

export default memo(Categories);
