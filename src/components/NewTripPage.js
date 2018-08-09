import React from 'react';
import { connect } from 'react-redux';

import TripForm from './TripForm';
import { addTrip } from '../actions/trips';

export class NewTripPage extends React.Component {
  onSubmit = (trip) => {
    // props.dispatch(addTrip(trip));
    this.props.addTrip(trip)
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
    addTrip: (trip) => dispatch(addTrip(trip))
});

export default connect(undefined, mapDispatchToProps)(NewTripPage);