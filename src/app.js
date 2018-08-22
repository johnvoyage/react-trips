import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

import configureStore from './store/configureStore';
import { startSetTrips } from './actions/trips';
import { setTextFilter } from './actions/filters';
import { getVisibleTrips } from './selectors/trips';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(<h1>Loading...</h1>, document.getElementById('app'));

store.dispatch(startSetTrips()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});
