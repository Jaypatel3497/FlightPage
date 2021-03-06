import React, { Component } from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';


class ShowFlights extends Component{
  handleSelect()
  {
    this.props.dispatch({type: 'ADDED_FALSE'})
    console.log(this.props.id);
    this.props.dispatch({type: 'ADD_CONTACT_FULFIELD',payload: this.props.total})
    browserHistory.push("/book-flight");
  }
  render(){
    return (
      <ul className="booking-list">
        <li>
          <div className="booking-item-container">
            <div className="booking-item">
              <div className="row">
                <div className="col-md-2">
                  <div className="booking-item-airline-logo">
                    <img className="Airline_logo" src="./lufthansa_logo.png" alt="Airline LOGO" title="Image Title" />
                    <p>{this.props.aircraft}</p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="row booking-item-flight-details">
                    <div className="col-md-6 booking-item-departure">
                      <div className="row">
                        <i className="fa fa-plane"></i>
                        <div className="leftside">
                          <h4>{this.props.departure_time}</h4>
                          <p className="booking-item-date">{this.props.departure_date}</p>
                        </div>
                      </div>
                      <p className="booking-item-destination">London, England, United Kingdom (LHR)</p>
                    </div>
                    <div className="col-md-6 booking-item-arrival">
                      <div className="row">
                        <i className="fa fa-plane fa-flip-vertical"></i>
                        <div className="leftside">
                          <h4>{this.props.arrival_time}</h4>
                          <p className="booking-item-date">{this.props.arrival_date}</p>
                        </div>
                      </div>
                      <p className="booking-item-destination">New York, NY, United States (JFK)</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <h4>{this.props.duration}</h4>
                  <p>{this.stops}</p>
                </div>
                <div className="col-md-3">
                  <span className="booking-item-price"><i className="fa fa-inr"></i>{this.props.total}</span><span>/person</span>
                  <p className="booking-item-flight-class">Class: Economy</p>
                  <button  className="submit" type="submit" onClick={this.handleSelect.bind(this)}>Select</button>
                </div>
              </div>
            </div>

          </div>
        </li>
      </ul>
    )
  }
}

export default ShowFlights;
