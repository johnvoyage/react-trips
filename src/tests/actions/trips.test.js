import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  startAddTrip ,
  addTrip,
  startEditTrip,
  editTrip,
  startRemoveTrip,
  removeTrip,
  setTrips,
  startSetTrips
} from '../../actions/trips';
import trips from '../fixtures/trips';
import database from '../../firebase/firebase';
import tripsReducer from '../../reducers/trips';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const tripsData = {};
  trips.forEach(({ id, country }) => {
    tripsData[id] = { country }
  });

  database.ref('trips').set(tripsData).then(() => {
    done();
  });
});

test('should setup remove trip action object', () => {
  const id = '123abc'
  const action = removeTrip({ id });

  expect(action).toEqual({
    type: 'REMOVE_TRIP',
    id
  });
});

test('should remove trip from firebase', (done) => {
  const store = createMockStore({});
  const id = trips[2].id;
  store.dispatch(startRemoveTrip({ id })).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_TRIP',
      id,
    });
    return database.ref(`trips/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
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

test('should setup set trip action object with data', () => {
  const action = setTrips(trips);
  expect(action).toEqual({
    type: 'SET_TRIPS',
    trips
  });
});

// test('should set trips', () => {
//   const action = {
//     type: 'SET_TRIPS',
//     trips: [trips[1]]
//   };
//   const state = tripsReducer(trips, action);
//
//   expect(state).toEqual([trips[1]]);
// });

test('should fetch the trips from firebase', (done) => {
  const store = createMockStore();
  store.dispatch(startSetTrips()).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'SET_TRIPS',
      trips
    })

    done();
  });

});
