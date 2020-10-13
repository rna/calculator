import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, wide, color, clickHandler,
}) => {
  const handleClick = () => clickHandler(name);

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
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  wide: '',
  color: 'orange',
};

export default Button;
