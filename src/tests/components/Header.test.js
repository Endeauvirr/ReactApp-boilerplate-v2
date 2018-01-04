import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../containers/Header';

let startLogout;
let photoURL;
let displayName;

beforeEach(() => {
  startLogout = jest.fn();
  photoURL = 'picture.jpg';
  displayName = 'name surname';
});

test('Should render Header container correctly', () => {
  const wrapper = shallow(<Header startLogout={() => {}} photoURL={photoURL} displayName={displayName} />);
  expect(wrapper).toMatchSnapshot();
});

test('Should call startLogout on button click', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />);

  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});
