import React from 'react';
import { connect } from 'react-redux';

import TripListItem from './TripListItem';
import { getVisibleTrips } from '../selectors/trips';

export const TripList = (props) => (
  <div>
    {
      props.trips.length === 0 ? (
        <p>No trips</p>
      ) : (
        props.trips.map((trip) => <TripListItem key={trip.id} {...trip} />)
      )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    trips: getVisibleTrips(state.trips, state.filters)
  };
};

export default connect(mapStateToProps)(TripList);
