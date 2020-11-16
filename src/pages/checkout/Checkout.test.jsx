import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProviderMock from '../../../__mocks__/ProviderMock';
import { Checkout } from './Checkout';

configure({ adapter: new Adapter() });

describe('Checkout Page', () => {
  const checkout = shallow(
    <ProviderMock>
      <MemoryRouter>
        <Checkout />
      </MemoryRouter>
    </ProviderMock>,
  );

  test('Should render without errors', () => {
    expect(checkout.length).toEqual(1);
  });
});
