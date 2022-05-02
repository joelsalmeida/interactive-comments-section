import React from 'react';
import PropTypes from 'prop-types';
import './RateButton.scss';
import minus from '../../images/icons/icon-minus.svg';
import plus from '../../images/icons/icon-plus.svg';

function RateButton({ rate }) {
  return (
    <div className="rate-button">
      <img src={plus} alt="" />
      <span>{rate}</span>
      <img src={minus} alt="" />
    </div>
  );
}

RateButton.propTypes = {
  rate: PropTypes.number.isRequired,
};

export default RateButton;
