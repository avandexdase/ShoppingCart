import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';

function CategoriesType({ data, currentCategory, loadCondProductData }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="">
      <div className="">
        <div
          style={{ display: isActive ? 'hidden' : '' }}
          className="categoryType__accordian"
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          {currentCategory ? currentCategory : 'select category'}
        </div>

        <ul
          className="categoryType__ul"
          style={{ display: isActive ? 'block' : 'hidden' }}
          onClick={() => setIsActive(!isActive)}
        >
          {data.map((each) => (
            <li
              className="categoryType__li"
              key={each.key}
              onClick={() => {
                loadCondProductData(each.id);
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
  data: PropTypes.array,
  index: PropTypes.number,
  currentCategory: PropTypes.string,
  loadCondProductData: PropTypes.func,
};

export default memo(CategoriesType);
