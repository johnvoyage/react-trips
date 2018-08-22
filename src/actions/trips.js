import uuid from 'uuid';
import database from '../firebase/firebase';

export const startAddTrip = (tripData = {}) => {
  return (dispatch) => {
    const {
      country = ''
    } = tripData;
    const trip = {
      country
    };

    return database.ref('trips').push(trip).then((ref) => {
      dispatch(addTrip({
        id: ref.key,
        ...trip
      }));
    });
  };
};

export const addTrip = (trip) => ({
  type: 'ADD_TRIP',
  trip
});

export const removeTrip = ({ id } = {}) => ({
  type: 'REMOVE_TRIP',
  id
});

export const editTrip = (id, updates) => ({
  type: 'EDIT_TRIP',
  id,
  updates
});

export const setTrips = (trips) => ({
  type: 'SET_TRIPS',
  trips
});

export const startSetTrips = () => {
  return (dispatch) => {
    return database.ref('trips').once('value').then((snapshot) => {
      const trips = [];

      snapshot.forEach((childSnapshot) => {
        trips.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setTrips(trips));
    });
  };
};
