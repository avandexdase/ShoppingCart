import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

function CategoriesType({ data }) {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (each) => {
    navigate('/products', { state: { id: each.id } });
  };
  return (
    <div className="">
      <div className="">
        <div
          // className={`accordion-title md:hidden  `}
          style={{display:isActive ? 'hidden' : ''}}
          onClick={() => {
            setIsActive(!isActive);
          }}
        ></div>

        <ul
          className="categoryType__ul"
          style={{display:isActive ? '' : 'hidden'}}
          onClick={() => setIsActive(!isActive)}
        >
          {data.map((each) => (
            <li
              className="categoryType__li"
              key={each.key}
              onClick={() => {
                handleSubmit(each);
              }}
            >
              {each.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

CategoriesType.propTypes = {
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

export default memo(CategoriesType);
