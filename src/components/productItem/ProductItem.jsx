import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductItem.module.scss';

export const ProductItem = (props) => {
  const {
    src,
    alt,
    onClick,
    selected,
    qty,
  } = props;
  return (
    <button
      onClick={onClick}
      type="button"
      className={styles.container}
    >
      <img
        className={`${styles.product_image} ${selected ? styles.selected : ''}`}
        src={src}
        alt={alt}
      />
      {qty ? (
        <div className={styles.count}>
          {qty}
        </div>
      ) : null}
    </button>
  );
};

ProductItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  qty: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

ProductItem.defaultProps = {
  onClick: null,
  selected: false,
  qty: null,
};
