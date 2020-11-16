import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProviderMock from '../../../__mocks__/ProviderMock';
import { ProductDetails } from './ProductDetails';

configure({ adapter: new Adapter() });

describe('ProductDetails Component', () => {
  const productDetails = shallow(
    <ProviderMock>
      <ProductDetails />
    </ProviderMock>,
  );

  test('Should render without errors', () => {
    expect(productDetails.length).toEqual(1);
  });
});
