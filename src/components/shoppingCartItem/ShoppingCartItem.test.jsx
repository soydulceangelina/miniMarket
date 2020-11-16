import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ShoppingCartItem } from './ShoppingCartItem';

configure({ adapter: new Adapter() });

describe('ShoppingCartItem Component', () => {
  const shoppingCartItem = shallow(
    <ShoppingCartItem
      img=""
      qty={0}
      alt=""
    />,
  );

  test('Should render without errors', () => {
    expect(shoppingCartItem.length).toEqual(1);
  });
});
