import React, { memo } from 'react';
import PropTypes from 'prop-types';

function Banner({ banner }) {
  console.log(banner)
  return (
    <div className="carousel" id="banner">
      <ol className='swiper'>
        {banner.map(each=>(
          <li className='swiper__item' id={each.id} key={each.id}>
          <img src={each.bannerImageUrl} alt={each.bannerImageAlt}/>
          </li>
        ))}
        

      </ol>
      <div className='swiper-btn'>
      {banner.map((each,index)=>(
        <a href={`#${each.id}`} key={index}></a>
        ))}
      </div>
    </div>
  );
}

Banner.propTypes = {
  banner: PropTypes.array,
};

export default memo(Banner);
