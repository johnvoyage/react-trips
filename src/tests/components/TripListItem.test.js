import React from 'react';
import { shallow } from 'enzyme';
import trips from '../fixtures/trips';
import TripListItem from '../../components/TripListItem';

test('should render TripListItem correctly', () => {
  const wrapper = shallow(<TripListItem {...trips[0]} />);
  expect(wrapper).toMatchSnapshot();
});
