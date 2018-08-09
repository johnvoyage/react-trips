import React from 'react';
import { Link } from 'react-router-dom';

import TripList from './TripList';
import TripListFilters from './TripListFilters';

const TripsPage = () => (
  <div>
    <TripListFilters />
    <TripList />
  </div>
);
    // {//<Link to='/trips/new'>New Trip</Link>}

export default TripsPage;