import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ShoppingCartIcon } from './ShoppingCartIcon';

configure({ adapter: new Adapter() });

describe('ShoppingCartIcon Icon', () => {
  const checkoutWithoutProps = shallow(<ShoppingCartIcon />);
  const checkoutWitProps = mount(<ShoppingCartIcon size={32} />);

  test('Should render without errors', () => {
    expect(checkoutWithoutProps.length).toEqual(1);
  });

  test('Should receive the size prop correctly', () => {
    expect(checkoutWitProps.props().size).toEqual(32);
  });
});
