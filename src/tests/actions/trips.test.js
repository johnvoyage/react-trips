import {addTrip, editTrip, removeTrip } from '../../actions/trips';

test('should setup remove expense action object', () => {
  const id = '123abc'
  const action = removeTrip({ id });

  expect(action).toEqual({
    type: 'REMOVE_TRIP',
    id
  });
});
