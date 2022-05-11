import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Categories({ data, index }) {
  return (
    <div
      key={data.id}
      className="home_categories"
    >
      <img
        className="category_img"
        src={data.imageUrl}
        alt={data.name}
      />
      {/* <div className="col-start-4 col-span-1 sm:hidden"></div> */}
      <div className="basis-4/6 px-6 flex justify-center flex-col items-center">
        <h2 className="md:text-2xl sm:text-sm font-bold">{data.name}</h2>
        <p className="md:text-xl sm:text-base text-center">{data.description}</p>
        <button className="mt-1 px-3 py-2 block w-full sm:text-xs bg-[#c91e50] text-white">
          <Link
            to="/products"
            className="hover:no-underline hover:text-inherit sm:text-xs"
          >{`explore ${data.key}`}</Link>
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
  index:PropTypes.number
};

export default memo(Categories);
