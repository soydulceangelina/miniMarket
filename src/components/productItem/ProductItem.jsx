import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductItem.module.css';

export const ProductItem = (props) => {
  const {
    src,
    alt,
    onClick,
  } = props;
  return (
    <button
      onClick={onClick}
      type="button"
      className={styles.container}
    >
      <img
        className={styles.product_image}
        src={src}
        alt={alt}
      />
    </button>
  );
};

ProductItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ProductItem.defaultProps = {
  onClick: null,
};
