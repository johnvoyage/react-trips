import React from 'react';
import { shallow } from 'enzyme';

import { NewTripPage } from '../../components/NewTripPage';
import trips from '../fixtures/trips';


let addTripSpy, historySpy, wrapper;

beforeEach(() => {
  addTripSpy = jest.fn();
  historySpy = { push: jest.fn() };
  wrapper = shallow(<NewTripPage  
    addTrip={addTripSpy}
    history={historySpy}
  />);
});

test('should render new trip page correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('TripForm').prop('onSubmit')(trips[1]);

  expect(historySpy.push).toHaveBeenLastCalledWith('/trips');
  expect(addTripSpy).toHaveBeenLastCalledWith(trips[1]);
});