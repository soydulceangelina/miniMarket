import React from 'react';
import Logo from '../../assets/logo.png';
import { ShoppingCartIcon } from '../../icons';
import styles from './Header.module.css';

export const Header = () => (
  <header className={styles.container}>
    <img src={Logo} alt="logo" className={styles.logo} />
    <div>
      <div className={styles.countItem}>
        <ShoppingCartIcon />
        <span>$25.50</span>
      </div>
    </div>
  </header>
);
