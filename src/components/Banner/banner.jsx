import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSwipeable } from 'react-swipeable';

function Banner({ banner }) {
  const [carouselId, setCarouselId] = useState(1);
  const [paused, setPaused] = useState(false);
  function plusSlides(n) {
    showSlides(carouselId + n);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) showSlides(carouselId + 1);
    }, 2000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });
  const handlers = useSwipeable({
    onSwipedLeft: () => showSlides(carouselId + 1),
    onSwipedRight: () => showSlides(carouselId - 1),
  });

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
  return banner.length > 0 ? (
    <>
      <div className="slideshow-container">
        {banner.map((each) => (
          <div
            className={
              carouselId == each.order ? 'swiper__item_active' : 'swiper__item'
            }
            key={each.order}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            {...handlers}
          >
            <img
              src={each.bannerImageUrl}
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

      <div className="dot_container">
        {banner.map((each) => (
          <span
            className={each.order === carouselId ? 'dot_active' : 'dot'}
            key={each.order}
            onClick={() => currentSlide(each.order)}
          ></span>
        ))}
      </div>
    </>
  ) : null;
}

Banner.propTypes = {
  banner: PropTypes.array,
};

export default memo(Banner);
