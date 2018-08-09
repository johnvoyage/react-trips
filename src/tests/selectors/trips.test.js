import { getVisibleTrips } from '../../selectors/trips';
import trips from '../fixtures/trips'


test('should filter by text value', () => {
  const filters = {
    text: 'u'
  };
  const result = getVisibleTrips(trips, filters);

  expect(result).toContain(trips[1]);
  expect(result).toContain(trips[2]);
});