const tripsReducerDefaultState = [];

const tripsReducer = (state = tripsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TRIP':
      return [
        ...state,
        action.trip
      ];
    case 'REMOVE_TRIP':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_TRIP':
      return state.map((trip) => {
        if (trip.id === action.id) {
          return {
            ...trip,
            ...action.updates
          };
        } else {  
          return trip;
        };
      });
    default:
      return state;
  };
};

export default tripsReducer;