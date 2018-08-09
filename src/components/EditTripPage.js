import React from 'react';
import { connect } from 'react-redux';

import TripForm from './TripForm';
import { editTrip, removeTrip } from '../actions/trips';

const EditTripPage = (props) => (
  <div>
    <TripForm
      trip={props.trip} 
      onSubmit={(trip) => {
        props.dispatch(editTrip(props.trip.id, trip));
        props.history.push('/trips');
      }}
    />
    <button onClick={() => {
      props.dispatch(removeTrip({ id: props.trip.id }));
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