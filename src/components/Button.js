import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name, wide, color } = props;
  const styleClasses = [wide ? 'wide' : '', color].join(' ');

  return (
    <button type="button" className={styleClasses}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

Button.defaultProps = {
  name: '',
  wide: '',
  color: 'dark',
};

export default Button;
