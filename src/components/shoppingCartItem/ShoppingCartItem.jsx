import React from 'react';
import PropTypes from 'prop-types';
import styles from './ShoppingCartItem.module.scss';

export const ShoppingCartItem = (props) => {
  const { img, qty, alt } = props;
  return (
    <div className={styles.container}>
      <span className={styles.count}>{qty}</span>
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
