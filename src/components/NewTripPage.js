import React from 'react';
import { connect } from 'react-redux';

import TripForm from './TripForm';
import { startAddTrip } from '../actions/trips';

export class NewTripPage extends React.Component {
  onSubmit = (trip) => {
    // props.dispatch(addTrip(trip));
    this.props.startAddTrip(trip)
    this.props.history.push('/trips');
  };

  render() {
    return (
      <div>
        <h1>New Trip</h1>
        <TripForm
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
    startAddTrip: (trip) => dispatch(startAddTrip(trip))
});

export default connect(undefined, mapDispatchToProps)(NewTripPage);
