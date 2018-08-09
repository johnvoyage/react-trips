import uuid from 'uuid';

export const addTrip = (
  {
    country = ''
  } = {}
) => ({
  type: 'ADD_TRIP',
  trip: {
    id: uuid(),
    country,
  }
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