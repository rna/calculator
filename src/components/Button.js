import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { buttonName } = props;
  return (
    <div>
      {buttonName}
    </div>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string,
};

Button.defaultProps = {
  buttonName: '',
};

export default Button;
