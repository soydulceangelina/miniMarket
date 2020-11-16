import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import styles from './Products.module.scss';
import { setSelectedProduct } from '../../store/products/productsActions';
import { ProductItem } from '../productItem/ProductItem';

export const Products = () => {
  const {
    products: data,
    selectedProduct,
    selectedProductQuantity,
  } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { push } = useHistory();

  const handleClick = (id) => () => {
    dispatch(setSelectedProduct(id));
    if (pathname === '/checkout') {
      push('/');
    }
  };

  return (
    <div className={styles.product}>
      <h4 className={styles.title}>Store</h4>
      <div className={styles.container}>
        {data.map(({ id, img }) => {
          const isSelected = selectedProduct !== null && selectedProduct === id;
          return (
            <ProductItem
              key={id}
              src={img}
              alt="producto"
              onClick={handleClick(id)}
              selected={isSelected}
              qty={isSelected && selectedProductQuantity}
            />
          );
        })}
      </div>
    </div>
  );
};
