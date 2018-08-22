import tripsReducer from '../../reducers/trips';
import trips from '../fixtures/trips';

test('should set trips', () => {
  const action = {
    type: 'SET_TRIPS',
    trips: [trips[1]]
  };
  const state = tripsReducer(trips, action);

  expect(state).toEqual([trips[1]]);
});
