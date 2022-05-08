import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Categories({ data }) {
  return (
    <div
      key={data.id}
      className="grid grid-cols-8 sm:grid-cols-5 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
    >
      <img
        className="col-start-1 col-span-3 sm:col-span-2 sm:h-56 md:h-64 w-[400px]"
        src={data.imageUrl}
        alt={data.name}
      />
      <div className="col-start-4 col-span-1 sm:hidden"></div>
      <div className="col-start-5 col-span-3 sm:col-start-3 sm:col-span-3 flex justify-center flex-col items-center">
        <h2 className="md:text-2xl sm:text-base font-bold">{data.name}</h2>
        <p className="md:text-xl sm:text-base">{data.description}</p>
        <button className="mt-1 px-3 py-2 block w-full sm:text-sm bg-[#c91e50] text-white">
          <Link
            to="/products"
            className="hover:no-underline hover:text-inherit"
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
};

export default memo(Categories);
