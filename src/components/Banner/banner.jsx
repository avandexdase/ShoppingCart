import React, { memo } from 'react';
import PropTypes from 'prop-types';

function Banner({ banner }) {
  return (
   <div>hello carousel</div>
  );
}

Banner.propTypes = {
  banner: PropTypes.array,
};

export default memo(Banner);
