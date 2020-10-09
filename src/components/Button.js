import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, wide, color, clickHandler,
}) => {
  const handleClick = e => clickHandler(e.target.value);

  const styleClasses = [wide ? 'wide' : '', color].join(' ');
  return (
    <button type="button" onClick={handleClick} style={{ backgroundColor: color }} className={styleClasses}>
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
  color: 'orange',
};

export default Button;
