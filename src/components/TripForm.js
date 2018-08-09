import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


class TripForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      country: props.trip ? props.trip.country : '',
      note: props.trip ? props.trip.note :'',
      amount: '',
      createdAt: props.trip ? moment(props.trip.createdAt) : moment(),
      calendarFocused: false,
      error: '',
    };
  }

  onCountryChange = (event) => {
    const country = event.target.value;
    this.setState(() => ({ country }))
  };

  onNoteChange = (event) => {
    const note = event.target.value;
    this.setState(() => ({ note }))
  };

  onAmountChange = (event) => {
    const amount = event.target.value;
    
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    };
  };

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    };
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }

  onSubmit = (event) => {
    event.preventDefault();

    if (!this.state.country) {
      this.setState(() => ({ error: "Please fill out the form" }));
    } else {
      this.setState(() => ({ error: '' }))
      this.props.onSubmit({
        country: this.state.country
      })
    };

  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input 
            autoFocus
            type="text"
            placeholder="Country"
            value={this.state.country}
            onChange={this.onCountryChange}
          />
          <input 
            type="text"
            placeholder="number for regex prctce"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
          />
          <textarea 
            placeholder="Add a note..."
            onChange={this.onNoteChange}
          />
          <button>Add Trip</button>
        </form>
      </div>
    );
  };
};

export default TripForm;

// <DateRangePicker
//   startDate={}
//   endDate={}
//   onDatesChange={}
//   focusedInput={}
//   onFocusChange={}
// />