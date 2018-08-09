import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'


import configureStore from './store/configureStore';

import { addTrip } from './actions/trips';
import { setTextFilter } from './actions/filters';
import { getVisibleTrips } from './selectors/trips';

const store = configureStore();

store.dispatch(addTrip({ country: 'USA' }))
store.dispatch(addTrip({ country: 'Germany' }))
// store.dispatch(setTextFilter('usa'))

// setTimeout(() => {
//   store.dispatch(setTextFilter('germ'));
// }, 3000);

const state = store.getState();
// console.log(state.trips)
// console.log(state.filters)
const visibleTrips = getVisibleTrips(state.trips, state.filters);
console.log(visibleTrips)

console.log(store.getState())

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));