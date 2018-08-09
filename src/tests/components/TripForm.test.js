import React from 'react';
import { shallow } from 'enzyme';

import TripForm from '../../components/TripForm';
import trips from '../fixtures/trips';

test('should render TripForm correctly', () => {
  const wrapper = shallow(<TripForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render TripeForm correctly with trip data', () => {
  const wrapper = shallow(<TripForm trip={trips[1]}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<TripForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });

  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set country on input change', () => {
  // const value = 'test value';
  // const wrapper = shallow(<TripForm />);
  // console.log(wrapper.find('input').at(0))
  // wrapper.find('input').at(0).simulate('change', {
  //   target: value
  // });

  // expect(wrapper.state('country')).toBe(value);
}); 

test('should call onSubmit prop for valid form submission', () => {
  // const onSubmitSpy = jest.fn();
  // const wrapper = shallow(<TripForm onSubmit={onSubmitSpy} trips={trips[0]} />);
  // wrapper.find('form').simulate('submit', {
  //   preventDefault: () => {}
  // });

  // // expect(wrapper.state('error')).toBe('');
  // expect(onSubmitSpy).toHaveBeenLastCalledWith({
  //   country: trips[0].country
  // });
});