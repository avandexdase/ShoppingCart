import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';

function CategoriesType({ data, selectedCategory='', loadCondProductData }) {
  const [isAccordianActive, setIsAccordianActive] = useState(false);
  const [activeCategoryID, setactiveCategoryID] = useState(0);

  return (
    <div className="">
      <div className="">
        <div
          className="categoryType__accordian_active"
          onClick={() => {
            setIsAccordianActive(!isAccordianActive);
          }}
        >
          {activeCategoryID == 0 ? 'select category' : selectedCategory}
        </div>

        <ul
          className={isAccordianActive ? "categoryType__ul_active" : "categoryType__ul"}
          onClick={() => setIsAccordianActive(!isAccordianActive)}
        >
          {data.map((each) => (
            <li
              className={
                activeCategoryID === each.id
                  ? 'categoryType__li-active'
                  : 'categoryType__li'
              }
              key={each.key}
              onClick={() => {
                loadCondProductData(each.id == activeCategoryID ? '' : each.id);
                setactiveCategoryID((prev) => (prev == each.id ? 0 : each.id));
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
