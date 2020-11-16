import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { MainContainer } from './MainContainer';

configure({ adapter: new Adapter() });

describe('MainContainer', () => {
  const mainContainer = shallow(<MainContainer><div /></MainContainer>);

  test('Should render without errors', () => {
    expect(mainContainer.length).toEqual(1);
  });
});
