import React, { Component } from 'react';
import FlightBooking from './Component/main';
import { createStore } from 'redux';

class App extends Component {
  render() {

    return (
      <div>
      <FlightBooking />
      </div>
    )
  }
}

export default App;
