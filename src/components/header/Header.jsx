import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { ShoppingCartIcon } from '../../icons';
import { totalToPaySelector } from '../../store/shoppingCart/shoppingCartSelectors';
import { toDollarCurrency } from '../../utils';
import styles from './Header.module.scss';

export const Header = () => {
  const totalToPay = useSelector(totalToPaySelector);

  return (
    <header className={styles.container}>
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          className={styles.logo}
        />
      </Link>
      <Link to="/checkout">
        <div className={styles.countItem}>
          <ShoppingCartIcon />
          <span>{toDollarCurrency(totalToPay)}</span>
        </div>
      </Link>
    </header>
  );
};
