import React from 'react';
import { connect } from 'react-redux';

import TripForm from './TripForm';
import { startEditTrip, startRemoveTrip } from '../actions/trips';

const EditTripPage = (props) => (
  <div>
    <TripForm
      trip={props.trip}
      onSubmit={(trip) => {
        props.dispatch(startEditTrip(props.trip.id, trip));
        props.history.push('/trips');
      }}
    />
    <button onClick={() => {
      props.dispatch(startRemoveTrip({ id: props.trip.id }));
      props.history.push('/trips');
    }}>Remove</button>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    trip: state.trips.find((trip) => trip.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditTripPage);
