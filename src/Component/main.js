import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { connect } from 'react-redux';
import './styles1.css';
import {browserHistory} from 'react-router'


import FlightTab from './FlightTab';



class FlightBooking extends Component {

  constructor(props){
    super(props);
    this.state = {from: '', to: '', departure_date: moment(),cls: 'Economy'}
    this.handleChange  =this.handleChange.bind(this);
  }

handleInput(e)
{
  this.setState({from: e});
}
handleInput2(e)
{
  this.setState({to: e});
}
handlerSubmit(){
    this.props.dispatch({type: 'FETCHED_FALSE'})
    this.props.dispatch({type: 'ADDED_FALSE'})
  if(this.state.from===this.state.to)
  {
    alert('Error: Departure and Destination cant be same');
  }
  else
  {
      const date=new Date(this.state.departure_date.format());
      var year = date.getFullYear();
      var month = date.getMonth()+1;
      var dt = date.getDate();
      if (dt < 10) {
        dt = '0' + dt;
      }
      if (month < 10) {
        month = '0' + month;
      }

      var str='available-flights/from='+this.state.from.value+"&to="+this.state.to.value+"&date="+year+'-' + month + '-'+dt;
      browserHistory.push(str)
      console.log(window.location);
  }

}
handleChange(e)
{
   this.setState({departure_date: e});
}

render() {

    return (
      <div className="global-wrap fullHeight">



        <div className="top-area show-onload">
            <div className="bg-holder full">
                <div className="bg-mask"></div>
                <div className="bg-parallax mkBgImage"></div>
                <div className="bg-content bgg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="search-tabs search-tabs-bg mt50">
                                    <h1>Find Your Perfect Trip</h1>
                                    <div className="tabbable">
                                        <ul className="nav nav-tabs" id="myTab">
                                            <li><a href="#tab-1" data-toggle="tab"><i className="fa fa-building-o"></i> <span >Hotels</span></a>
                                            </li>
                                            <li className="active"><a href="#tab-2" data-toggle="tab"><i className="fa fa-plane"></i> <span >Flights</span></a>
                                            </li>
                                            <li><a href="#tab-3" data-toggle="tab"><i className="fa fa-home"></i> <span >Rentals</span></a>
                                            </li>
                                            <li><a href="#tab-4" data-toggle="tab"><i className="fa fa-car"></i> <span >Cars</span></a>
                                            </li>
                                            <li><a href="#tab-5" data-toggle="tab"><i className="fa fa-bolt"></i> <span >Activities</span></a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">


                                            <FlightTab />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




      </div>






     )
 }
}
function mapStateToProps(state) {
  return { airport_details: state.airport_details.airport_details,
           filters: state.airport_details.filter,
           flights: state.available_flight.flights,
         }
}

export default connect(mapStateToProps)(FlightBooking)
