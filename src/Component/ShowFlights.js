import React, { Component } from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

class ShowFlight extends Component{
  constructor(){
    super();
    this.state = {display:false}
  }

  handleSelect()
  {

    var str='/book-flight/from='+this.props.tripsDetails.from+'&to='+this.props.tripsDetails.to+'&date='+this.props.departure_date+'&departure_time='+this.props.departure_time+'&arrival_time='+this.props.arrival_time+'&arrival_date='+this.props.arrival_date+'&price='
             +this.props.total+'&airlineName='+this.props.airlineName+'&duration='+this.props.duration+'&cabin='+this.props.cabin;
    browserHistory.push(str);
  }
  handleClick()
  {
    this.setState({display: !this.state.display});
    //console.log(this.state.display);
  }
  render(){
    var i="https://daisycon.io/images/airline/?width=300&height=150&color=ffffff&iata="+this.props.carrier;
    var name=this.props.airlineName;
  
     return (
       <div>
       <ul className="booking-list">
         <li>
             <div className="booking-item-container">
                 <div className="booking-item" onClick={this.handleClick.bind(this)}>
                     <div className="row">
                         <div className="col-md-2">
                             <div className="booking-item-airline-logo">
                             <div>
                              <img src={i}  title="No Image"/>
                                 <p>{name}</p>
                              </div>
                             </div>
                         </div>
                         <div className="col-md-5">
                             <div className="booking-item-flight-details">
                                 <div className="booking-item-departure"><i className="fa fa-plane"></i>
                                     <h5>{this.props.departure_time}</h5>
                                     <p className="booking-item-date">{this.props.departure_date}</p>
                                     <p className="booking-item-destination">{this.props.tripsDetails.from}</p>
                                 </div>
                                 <div className="booking-item-arrival"><i className="fa fa-plane fa-flip-vertical"></i>
                                     <h5>{this.props.arrival_time}</h5>
                                     <p className="booking-item-date">{this.props.arrival_date}</p>
                                     <p className="booking-item-destination">{this.props.tripsDetails.to}</p>
                                 </div>
                             </div>
                         </div>
                         <div className="col-md-2">
                             <h5>{this.props.duration}</h5>
                             <p>{this.props.noOfStops?this.props.noOfStops:"Non"}-Stop</p>
                         </div>
                         <div className="col-md-3"><span className="booking-item-price"><i className="fa fa-inr"></i>{this.props.total}</span><span>/person</span>
                             <p className="booking-item-flight-className">Class: {this.props.cabin}</p><button className="btn btn-warning booking-button" type="submit" onClick={this.handleSelect.bind(this)}>Select</button>
                         </div>
                     </div>
                 </div>
        {this.state.display ? this.props.specialElement : null}
             </div>
         </li>
       </ul>
       </div>
     );
  }
}
function mapStateToProps(state) {
  return {
           tripsDetails: state.available_flight.trips
         }
}

export default connect(mapStateToProps)(ShowFlight);
