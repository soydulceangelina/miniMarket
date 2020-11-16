import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { ShoppingCartIcon } from '../../icons';
import { totalToPaySelector } from '../../store/shoppingCart/shoppingCartSelectors';
import { cleanShoppingCart } from '../../store/shoppingCart/shoppingCartActions';
import { toDollarCurrency } from '../../utils';
import styles from './Header.module.scss';

export const Header = () => {
  const totalToPay = useSelector(totalToPaySelector);
  const dispatch = useDispatch();

  const handleCleanShoppingCart = () => {
    dispatch(cleanShoppingCart());
  };

  return (
    <header className={styles.container}>
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          className={styles.logo}
        />
      </Link>
      <NavLink
        to="/checkout"
        activeClassName={styles.showDelete}
      >
        <div className={styles.countItem}>
          <ShoppingCartIcon />
          <span>{toDollarCurrency(totalToPay)}</span>
          <button
            className={styles.deleteButton}
            type="button"
            onClick={handleCleanShoppingCart}
          >
            X
          </button>
        </div>
      </NavLink>
    </header>
  );
};
