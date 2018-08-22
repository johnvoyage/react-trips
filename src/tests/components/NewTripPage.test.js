import React from 'react';
import { shallow } from 'enzyme';

import { NewTripPage } from '../../components/NewTripPage';
import trips from '../fixtures/trips';


let startAddTrip, historySpy, wrapper;

beforeEach(() => {
  startAddTrip = jest.fn();
  historySpy = { push: jest.fn() };
  wrapper = shallow(<NewTripPage
    startAddTrip={startAddTrip}
    history={historySpy}
  />);
});

test('should render new trip page correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('TripForm').prop('onSubmit')(trips[1]);

  expect(historySpy.push).toHaveBeenLastCalledWith('/trips');
  expect(startAddTrip).toHaveBeenLastCalledWith(trips[1]);
});
