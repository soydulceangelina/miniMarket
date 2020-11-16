import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ProductItem } from './ProductItem';

configure({ adapter: new Adapter() });

describe('ProductItem Component', () => {
  const productItem = shallow(
    <ProductItem
      src=""
      alt=""
    />,
  );

  test('Should render without errors', () => {
    expect(productItem.length).toEqual(1);
  });
});
