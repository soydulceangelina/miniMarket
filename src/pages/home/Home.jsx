import React from 'react';
import styles from './Home.module.css';
import {
  Header,
  Products,
  ShoppingCart,
} from '../../components';

function Home() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.main}>
          <Products />
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
}

export default Home;
