import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { ShoppingCartIcon } from '../../icons';
import styles from './Header.module.css';

export const Header = () => (
  <header className={styles.container}>
    <Link to="/">
      <img src={Logo} alt="logo" className={styles.logo} />
    </Link>
    <Link to="/checkout">
      <div className={styles.countItem}>
        <ShoppingCartIcon />
        <span>$25.50</span>
      </div>
    </Link>
  </header>
);
