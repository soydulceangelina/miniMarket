import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProviderMock from '../../../__mocks__/ProviderMock';
import { Home } from './Home';

configure({ adapter: new Adapter() });

describe('Home Page', () => {
  const home = shallow(
    <ProviderMock>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </ProviderMock>,
  );

  test('Should render without errors', () => {
    expect(home.length).toEqual(1);
  });
});
