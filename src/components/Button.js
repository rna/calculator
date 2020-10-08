import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, wide, color }) => {
  const styleClasses = [wide ? 'wide' : '', color].join(' ');
  return (
    <button type="button" className={styleClasses}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

Button.defaultProps = {
  wide: '',
  color: 'dark',
};

export default Button;
