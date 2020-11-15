import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { ShoppingCartItem } from '../shoppingCartItem/ShoppingCartItem';
import styles from './ShoppingCart.module.css';
import { totalToPaySelector } from '../../store/shoppingCart/shoppingCartSelectors';
import { toDollarCurrency } from '../../utils';
import { useWompiWidget } from '../../hooks';

export const ShoppingCart = () => {
  const totalToPay = useSelector(totalToPaySelector);
  const { productsInCart } = useSelector((state) => state.shoppingCart);
  const wompiForm = useRef(null);

  useWompiWidget({
    src: 'https://checkout.wompi.co/widget.js',
    'data-render': 'button',
    'data-public-key': process.env.REACT_APP_WOMPI_KEY,
    'data-currency': 'COP',
    'data-amount-in-cents': `${totalToPay * 100}`,
    'data-reference': '4XMPGKWWPKWQ',
  }, wompiForm);

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
      <div className={styles.totalToPay}>
        <p>
          Total:
          {' '}
          <span className={styles.total}>{toDollarCurrency(totalToPay)}</span>
        </p>
      </div>
      <form ref={wompiForm} className={styles.wompi} />
    </div>
  );
};
