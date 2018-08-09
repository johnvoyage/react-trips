import React from 'react';
import { shallow } from 'enzyme';

import trips from '../fixtures/trips';
import { TripList } from '../../components/TripList';

test('should render TripList with trips', () => {
  const wrapper = shallow(<TripList trips={trips}/>)
  expect(wrapper).toMatchSnapshot();
});

test('should render TripList with no trips', () => {
  const wrapper = shallow(<TripList trips={[]}/>)
  expect(wrapper).toMatchSnapshot();
});