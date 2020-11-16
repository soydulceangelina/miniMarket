import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProviderMock from '../../../__mocks__/ProviderMock';
import { ShoppingCart } from './ShoppingCart';

configure({ adapter: new Adapter() });

describe('ShoppingCart Component', () => {
  const shoppingCart = shallow(
    <ProviderMock>
      <ShoppingCart />
    </ProviderMock>,
  );

  test('Should render without errors', () => {
    expect(shoppingCart.length).toEqual(1);
  });
});
