import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

function Button({ text, handleClick }) {
  return (
    <button className="button" type="button" onClick={handleClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
