import React, { Component } from 'react';
import AllFlights from './AllFlights';
import FilterOptions from './FilterOptions';
import {connect} from "react-redux";

import {browserHistory} from 'react-router'
import {fetchData} from './actions'

class AvailableFlights extends Component{
  constructor(){
    super();
    this.state={sidebarOpen: false};
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  componentWillMount()
   {

     const data={
       Origin_Code : this.props.params.origin,
       Dest_Code : this.props.params.destination,
       start_Date: this.props.params.departure_date
     }

     this.props.dispatch(fetchData(data));
     console.log(this.props);
   }
  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }
  handleChangeSelect(e)
  {
    //console.log(e.target.value);
    this.props.dispatch({type: "SORT_FALSE"})
    this.sortBy(e.target.value);
  }
  sortBy(value)
  {
    var temp=this.props.flights
    //console.log(value);
    //console.log(temp);
    if(value==='Arrival')
    {
      temp.sort(function(a,b)
      {
        if(a.arrival_date<b.arrival_date)
        {
          return -1;
        }
        else if(a.arrival_date>b.arrival_date)
        {
          return 1;
        }
        else {
          if(a.arrival_time_24<b.arrival_time_24)
          return -1;
          else if(a.arrival_time_24>b.arrival_time_24)
          return 1;
          else
          return 0;
        }

      })
    }
    if(value==='Price')
    {
      temp.sort(function(a,b)
      {
        var total_a=parseInt(a.total.substring(3));
        var total_b=parseInt(b.total.substring(3));
        return total_a-total_b;
      })
      //console.log(temp);
    }
    if(value==='Departure')
    {
      temp.sort(function(a,b)
      {
        if(a.departure_date<b.departure_date)
        {
          return -1;
        }
        else if(a.departure_date>b.departure_date)
        {
          return 1;
        }
        else {
          if(a.departure_time_24<b.departure_time_24)
          return -1;
          else if(a.departure_time_24>b.departure_time_24)
          return 1;
          else
          return 0;
        }

      })
    }
    if(value==='Duration')
    {
      temp.sort(function(a,b)
      {
         var duration_a=parseInt(a.duration_in_minut);
         var duration_b=parseInt(b.duration_in_minut);
         return duration_a-duration_b;
      })
    }
    if(value==='Stops')
    {
      temp.sort(function(a,b)
      {
        return a.noOfStops-b.noOfStops;
      })
    }
    this.props.dispatch({type: 'FETCH_FLIGHTS_FULFILLED',payload: temp})
    this.forceUpdate()
  }
  updateFilter(e){
   this.props.dispatch({type:"FILTER_FALSE"})
   this.filterBy(e.target.id)
 }

 filterBy(val){
   switch (val) {
     case "nonStop":{
       let ps = this.props.filterX.nonStop;
       this.props.dispatch({type:"SET_NON_STOP",payload:!ps});
       break;
     }
     case "oneStop":{
       let ps = this.props.filterX.oneStop;
       this.props.dispatch({type:"SET_ONE_STOP",payload:!ps});
       break;
     }
     case "twoStop":{
       let ps = this.props.filterX.twoStop;
       this.props.dispatch({type:"SET_TWO_STOP",payload:!ps});
       break;
     }
     case "economy":{
       let ps = this.props.filterX.economy;
       this.props.dispatch({type:"SET_ECONOMY",payload:!ps});
       break;
     }
     case "business":{
       let ps = this.props.filterX.business;
       this.props.dispatch({type:"SET_BUSINESS",payload:!ps});
       break;
     }
     case "first":{
       let ps = this.props.filterX.first;
       this.props.dispatch({type:"SET_FIRST",payload:!ps});
       break;
     }
     case "price1":{
       let ps = this.props.filterX.price1;
       this.props.dispatch({type:"SET_PRICE1",payload:!ps});
       break;
     }
     case "price2":{
       let ps = this.props.filterX.price2;
       this.props.dispatch({type:"SET_PRICE2",payload:!ps});
       break;
     }
     case "price3":{
       let ps = this.props.filterX.price3;
       this.props.dispatch({type:"SET_PRICE3",payload:!ps});
       break;
     }
     case "airindia":{
        let ps=false;
        let c=0;
        let index=0;
        if(this.props.filterX.airlines.length>0){
          this.props.filterX.airlines.map(e =>{
            if(e==="Air India"){
              ps=true;
              index = c;
            }
            c++;
          })
        }
        //console.log("INDEX....",index);
      //  console.log("PS....",ps);
        if(ps===true){
          this.props.dispatch({type:"REMOVE_AIRLINES",payload:index});
        }
        else{
          this.props.dispatch({type:"SET_AIRLINES",payload:"Air India"});
        }
        break;
      }
      case "jetairways":{
        let ps=false;
        let c=0;
        let index=0;
        if(this.props.filterX.airlines.length>0){
          this.props.filterX.airlines.map(e =>{
            if(e==="Jet Airways (India)"){
              ps=true;
              index = c;
            }
            c++;
          })
        }
        //console.log("INDEX....",index);
        //console.log("PS....",ps);
        if(ps===true){
          this.props.dispatch({type:"REMOVE_AIRLINES",payload:index});
        }
        else{
          this.props.dispatch({type:"SET_AIRLINES",payload:"Jet Airways (India)"});
        }
        break;
      }
      case "lufthansa":{
        let ps=false;
        let c=0;
        let index=0;
        if(this.props.filterX.airlines.length>0){
          this.props.filterX.airlines.map(e =>{
            if(e==="Deutsche Lufthansa"){
              ps=true;
              index = c;
            }
            c++;
          })
        }
        //console.log("INDEX....",index);
      //  console.log("PS....",ps);
        if(ps===true){
          this.props.dispatch({type:"REMOVE_AIRLINES",payload:index});
        }
        else{
          this.props.dispatch({type:"SET_AIRLINES",payload:"Deutsche Lufthansa"});
        }
        break;
      }
      case "britishairways":{
        let ps=false;
        let c=0;
        let index=0;
        if(this.props.filterX.airlines.length>0){
          this.props.filterX.airlines.map(e =>{
            if(e==="British Airways"){
              ps=true;
              index = c;
            }
            c++;
          })
        }
      //  console.log("INDEX....",index);
      //  console.log("PS....",ps);
        if(ps===true){
          this.props.dispatch({type:"REMOVE_AIRLINES",payload:index});
        }
        else{
          this.props.dispatch({type:"SET_AIRLINES",payload:"British Airways"});
        }
        break;
      }
      case "swiss":{
        let ps=false;
        let c=0;
        let index=0;
        if(this.props.filterX.airlines.length>0){
          this.props.filterX.airlines.map(e =>{
            if(e==="SWISS"){
              ps=true;
              index = c;
            }
            c++;
          })
        }
        //console.log("INDEX....",index);
        //console.log("PS....",ps);
        if(ps===true){
          this.props.dispatch({type:"REMOVE_AIRLINES",payload:index});
        }
        else{
          this.props.dispatch({type:"SET_AIRLINES",payload:"SWISS"});
        }
        break;
      }
      case "klm":{
        let ps=false;
        let c=0;
        let index=0;
        if(this.props.filterX.airlines.length>0){
          this.props.filterX.airlines.map(e =>{
            if(e==="KLM"){
              ps=true;
              index = c;
            }
            c++;
          })
        }
      //  console.log("INDEX....",index);
      //  console.log("PS....",ps);
        if(ps===true){
          this.props.dispatch({type:"REMOVE_AIRLINES",payload:index});
        }
        else{
          this.props.dispatch({type:"SET_AIRLINES",payload:"KLM"});
        }
        break;
      }
      case "Morning":{
        let ps = this.props.filterX.morning;
        this.props.dispatch({type:"SET_MORNING",payload:!ps});
        break;
      }
      case "Afternoon":{
        let ps = this.props.filterX.afternoon;
        this.props.dispatch({type:"SET_AFTERNOON",payload:!ps});
        break;
      }
      case "Evening":{
        let ps = this.props.filterX.evening;
        this.props.dispatch({type:"SET_EVENING",payload:!ps});
        break;
      }
      default:
        break;
    }
 }
  render(){

    var sidebarContent = <div className="sidebar"><FilterOptions handlerChange={this.updateFilter.bind(this)}/></div>;
     return (
      <div>
      {this.props.fetched?(
        <div className="global-wrap">
        <hr />
          <div className="container">

          <div className="row">
          <div className="col-md-3" id="Filters">
              <FilterOptions handlerChange={this.updateFilter.bind(this)}/>
          </div>


            <div className="col-md-9">
            <center><h3 className="booking-title">{"Available Flights from "+ this.props.tripsDetails.from+" to " +this.props.tripsDetails.to+ " on "  +this.props.tripsDetails.date}
              <small>  <a className="popup-text search" href={window.location.origin} data-effect="mfp-zoom-out" >Change search
                      </a></small>
            </h3></center>
              <div className="nav-drop booking-sort">
                SORT:
                  <select className="nav-drop-menu dropdown" name="Sort" onChange={this.handleChangeSelect.bind(this)}>
                    <option value="Price">Price(Low To High)</option>
                    <option value="Duration">Duration</option>
                    <option value="Stops">Stops</option>
                    <option value="Arrival">Arrival</option>
                    <option value="Departure">Departure</option>
                  </select>
              </div>
             <AllFlights flightsList={this.props.flights}/>
            </div>
          </div>
          </div>
          </div>
          )

          :(<h3>Loading...</h3>)
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
           airports: state.airport_details.airportsname,
           flights: state.available_flight.flights,
           tripsDetails: state.available_flight.trips,
           fetched: state.available_flight.fetched,
           filterX: state.FilterOption
         }
}

export default connect(mapStateToProps)(AvailableFlights)
