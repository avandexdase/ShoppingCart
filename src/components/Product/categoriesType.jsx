import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import ExpandMore from '../../icons/expandMore';

function CategoriesType({ data, selectedCategory, loadCondProductData }) {
  const [isAccordianActive, setIsAccordianActive] = useState(false);
  const [activeCategoryID, setactiveCategoryID] = useState(selectedCategory);

  return (
    <div className="">
      <div className="">
        <div
          className="categoryType__accordian"
          onClick={() => {
            setIsAccordianActive(!isAccordianActive);
          }}
          data-testid='categoryAccordian'
        >
          {selectedCategory == '' ? 'select category' : selectedCategory}
          <ExpandMore />
        </div>

        <ul
          className={
            isAccordianActive ? 'categoryType__ul_active' : 'categoryType__ul'
          }
          onClick={() => setIsAccordianActive(!isAccordianActive)}
          data-testid='categoryUl'
          key='categoryUl'
        >
          {data.map((each) => (
            <li
              className={
                selectedCategory === each.name
                  ? 'categoryType__li-active'
                  : 'categoryType__li'
              }
              key={each.key}
              data-testid={each.key}
              onClick={() => {
                loadCondProductData(
                  each.name == selectedCategory ? 0 : each.id
                );
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
