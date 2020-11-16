import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Products.module.scss';
import { setSelectedProduct } from '../../store/products/productsActions';
import { ProductItem } from '../productItem/ProductItem';

export const Products = () => {
  const { products: data } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleClick = (id) => () => {
    dispatch(setSelectedProduct(id));
  };

  return (
    <div className={styles.product}>
      <h4 className={styles.title}>Store</h4>
      <div className={styles.container}>
        {data.map(({ id, img }) => (
          <ProductItem
            key={id}
            src={img}
            alt="producto"
            onClick={handleClick(id)}
          />
        ))}
      </div>
    </div>
  );
};
