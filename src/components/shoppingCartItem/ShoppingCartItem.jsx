import React from 'react';
import PropTypes from 'prop-types';

export const ShoppingCartItem = (props) => {
  const { img, qty, alt } = props;
  return (
    <div>
      <span>{qty}</span>
      <img
        src={img}
        alt={alt}
      />
    </div>
  );
};

ShoppingCartItem.propTypes = {
  img: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
};
