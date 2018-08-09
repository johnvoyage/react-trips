import { createStore, combineReducers } from 'redux'

import filtersReducer from '../reducers/filters';
import tripsReducer from '../reducers/trips';

export default () => {
  const store = createStore(
    combineReducers({
      trips: tripsReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
  return store;
};

