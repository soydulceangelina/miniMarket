import React from 'react';
import {
  Header,
  Products,
  ProductDetails,
} from '../../components';
import { MainContainer } from '../../containers';

export const Home = () => (
  <>
    <Header />
    <MainContainer>
      <Products />
      <ProductDetails />
    </MainContainer>
  </>
);
