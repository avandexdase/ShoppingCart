import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

function Banner({ banner }) {
  const [carouselId, setCarouselId] = useState(1);

  function plusSlides(n) {
    showSlides(carouselId + n);
  }

  function currentSlide(n) {
    showSlides(n);
  }

  function showSlides(n) {
    let slideIndex = 1;
    if (n > banner.length) {
      slideIndex = 1;
    } else if (n < 1) {
      slideIndex = banner.length;
    } else slideIndex = n;
    setCarouselId(slideIndex);
  }
  return (
    <>
      <div className="slideshow-container">
        {banner.map((each) => (
          <div
            className={
              carouselId == each.order ? 'swiper__item_active' : 'swiper__item'
            }
            key={each.order}
          >
            <img
              src={each.bannerImageUrl}
              style={{ width: '100%' }}
              className="swiper__img"
              alt={each.bannerImageAlt}
            />
          </div>
        ))}

        <span className="prev" onClick={() => plusSlides(-1)}>
          PREV
        </span>
        <span className="next" onClick={() => plusSlides(1)}>
          NEXT
        </span>
      </div>
      <br />

      <div style={{ textAlign: 'center' }}>
        {banner.map((each) => (
          <span
            className={each.order === carouselId ? 'dot_active' : 'dot'}
            key={each.order}
            onClick={() => currentSlide(each.order)}
          ></span>
        ))}
      </div>
    </>
  );
}

Banner.propTypes = {
  banner: PropTypes.array,
};

export default memo(Banner);
