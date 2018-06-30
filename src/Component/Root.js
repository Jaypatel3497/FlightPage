import React, { Component } from 'react';
import {fetchAirportDetails} from './actions'
import { Provider } from "react-redux";
import FlightBooking from  './main'
import configureStore from "./store";
import AvailableFlights from './AvailableFlights'
import Submitform from './SubmitForm'
import { Router,Route,browserHistory } from "react-router"

const store=configureStore();
store.dispatch(fetchAirportDetails());

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={FlightBooking}>
        </Route>
        <Route path="/available-flights/from=:origin&to=:destination&date=:departure_date" component={AvailableFlights}>
        </Route>
        <Route path='/book-flight/from=:origin&to=:destination&date=:departure_date&departure_time=:departure_time&arrival_time=:arrival_time&arrival_date=:arrival_date&price=:price&airlineName=:airlineName&duration=:duration&cabin=:cabin' component={Submitform}>
        </Route>
      </Router>
      </Provider>
    )
  }
}
