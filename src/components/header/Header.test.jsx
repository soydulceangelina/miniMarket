import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProviderMock from '../../../__mocks__/ProviderMock';
import { Header } from './Header';

configure({ adapter: new Adapter() });

describe('Header Component', () => {
  const header = mount(
    <ProviderMock>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </ProviderMock>,
  );

  test('Should render without errors', () => {
    expect(header.length).toEqual(1);
  });

  test('Should have header tag', () => {
    expect(header.find('header').length).toEqual(1);
  });

  test('Should have two anchor tags', () => {
    expect(header.find('a').length).toEqual(2);
  });

  test('Should have a ShoppingCartIcon', () => {
    expect(header.find('ShoppingCartIcon').length).toEqual(1);
  });

  test('ShoppingCartIcon size should be 32', () => {
    const shoppingCartIcon = header.find('ShoppingCartIcon');
    expect(shoppingCartIcon.props().size).toEqual(32);
  });

  test('Should have a div tag', () => {
    expect(header.find('div').length).toEqual(1);
  });

  test('Should have a span tag', () => {
    expect(header.find('span').length).toEqual(1);
  });

  test('Should have a home page link', () => {
    expect(header.find('Link').first().props().to).toEqual('/');
  });

  test('Should have a checkout page link', () => {
    expect(header.find('Link').at(1).props().to).toEqual('/checkout');
  });
});
