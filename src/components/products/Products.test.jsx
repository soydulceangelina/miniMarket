import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProviderMock from '../../../__mocks__/ProviderMock';
import { Products } from './Products';

configure({ adapter: new Adapter() });

describe('Products Component', () => {
  const products = shallow(
    <ProviderMock>
      <Products />
    </ProviderMock>,
  );

  test('Should render without errors', () => {
    expect(products.length).toEqual(1);
  });
});
