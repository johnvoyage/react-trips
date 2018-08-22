import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { startAddTrip ,addTrip, editTrip, removeTrip } from '../../actions/trips';
import trips from '../fixtures/trips';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should setup remove trip action object', () => {
  const id = '123abc'
  const action = removeTrip({ id });

  expect(action).toEqual({
    type: 'REMOVE_TRIP',
    id
  });
});

test('should setup add trip action object with provided values', () => {
  const action = addTrip(trips[2]);
  expect(action).toEqual({
    type: 'ADD_TRIP',
    trip: trips[2]
  });
});

// ASYNC TESTS:
test('should add trip to database and store', (done) => {
  const store = createMockStore({});
  const tripData = {
    country: 'Portugal'
  };

  store.dispatch(startAddTrip(tripData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_TRIP',
      trip: {
        id: expect.any(String),
        ...tripData
      }
    });

    return database.ref(`trips/${actions[0].trip.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(tripData);

    done();
  });
});

test('should add trip with defaults to database and store', (done) => {
  const store = createMockStore({});
  const tripDefaults = {
    country: ''
  };

  store.dispatch(startAddTrip({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_TRIP',
      trip: {
        id: expect.any(String),
        ...tripDefaults
      }
    });

    return database.ref(`trips/${actions[0].trip.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(tripDefaults);

    done();
  });

});
