import React from 'react';
import { useSelector } from 'react-redux';
import { ShoppingCartItem } from '../shoppingCartItem/ShoppingCartItem';
import styles from './ShoppingCart.module.css';
import { totalToPaySelector } from '../../store/shoppingCart/shoppingCartSelectors';
import { toDollarCurrency } from '../../utils';

export const ShoppingCart = () => {
  const totalToPay = useSelector(totalToPaySelector);
  const { productsInCart } = useSelector((state) => state.shoppingCart);

  return (
    <div className={styles.cart}>
      <h4 className={styles.title}>Shopping Cart</h4>
      <div className={styles.container}>
        {productsInCart.map((productInCart) => (
          <ShoppingCartItem
            key={productInCart.product.id}
            img={productInCart.product.img}
            qty={productInCart.qty}
            alt={`product-in-cart-${productInCart.product.id}`}
          />
        ))}
      </div>
      <span>
        Total:
        {' '}
        {toDollarCurrency(totalToPay)}
      </span>
    </div>
  );
};
