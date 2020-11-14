import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Products.module.css';
import { setSelectedProduct } from '../../store/products/productsActions';

export const Products = () => {
  const {
    products: data,
    selectedProduct,
  } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleClick = (id) => () => {
    dispatch(setSelectedProduct(id));
  };

  return (
    <div className={styles.product}>
      <h4 className={styles.title}>
        Store -
        {' '}
        {selectedProduct}
      </h4>
      <div className={styles.container}>
        {data.map(({ id, img }) => (
          <img
            className={styles.product_image}
            src={img}
            alt="producto"
            key={id}
            onClick={handleClick(id)}
            role="presentation"
          />
        ))}
      </div>
    </div>
  );
};
