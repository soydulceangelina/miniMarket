import React from 'react';
import {
  Header,
  Products,
  ShoppingCart,
} from '../../components';
import { MainContainer } from '../../containers';

export const Checkout = () => (
  <>
    <Header />
    <MainContainer>
      <Products />
      <ShoppingCart />
    </MainContainer>
  </>
);
