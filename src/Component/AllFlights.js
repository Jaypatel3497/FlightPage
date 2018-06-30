import React, { Component } from 'react';
import {connect} from 'react-redux';
import ShowFlight from './ShowFlights';


class AllFlights extends Component{
  constructor(){
    super();
    this.state = {display:false,data: []}
  }
  componentWillMount(){

  }
  render(){
    if(this.props.sort)
    {
    let temp = [];
    var flag=true;
      this.props.flightsList.map(e=>{
        if((this.props.filterX.nonStop&&e.noOfStops===0)||(e.noOfStops===1&&this.props.filterX.oneStop)||(e.noOfStops===2&&this.props.filterX.twoStop)){
           temp.push(e);
        }

      })

    if(this.props.filterX.nonStop||this.props.filterX.oneStop||this.props.filterX.twoStop)
    {
      flag=false;
    }
    if(flag)
    {
      temp = this.props.flightsList;
    }
    var temp2 = [];
    flag=true;
    temp.map(e=>{
      if((this.props.filterX.economy&&e.cabin==="COACH")||(e.cabin==="BUSINESS"&&this.props.filterX.business)||(e.cabin==="FIRST"&&this.props.filterX.first)){
         temp2.push(e);
      }
    })
    //console.log(temp2);
    if(this.props.filterX.economy||this.props.filterX.business||this.props.filterX.first){
      flag=false;
    }
    if(flag)
    {
      temp2 = temp;
    }

    var temp3 = [];
    flag=true;
    temp2.map(e=>{
      const total=parseInt(e.total.substring(3));
      if((this.props.filterX.price1&&total<=5000)||(total<=15000&&total>=5000&&this.props.filterX.price2)||(total>=15000&&this.props.filterX.price3)){
         temp3.push(e);
      }
    })
    //console.log(temp3);
    if(this.props.filterX.price1||this.props.filterX.price2||this.props.filterX.price3){
      flag=false;
    }
    if(flag)
    {
      temp3 = temp2;
    }
    var temp4 = [];
    flag=true;
    temp3.map(e=>{
      const airlineName = e.airlineName;
      if(this.props.filterX.airlines.length>0){
        this.props.filterX.airlines.map(itr => {
          if(itr==airlineName){
            temp4.push(e);
          }
        })

      }
    })
    if(this.props.filterX.airlines.length>0)
    flag=false;
    //console.log(temp4);
    if(flag)
    {
      temp4 = temp3;
    }
    var final = [];
    flag=true;
    temp4.map(e=>{
      var departure=e.departure_time_24;
      if(this.props.filterX.morning&&departure>"05:00"&&departure<"11:59"){
         final.push(e);
      }
      if(this.props.filterX.afternoon&&departure>"12:00"&&departure<"17:59"){
         final.push(e);
      }
      if(this.props.filterX.evening&&departure>"18:00"&&departure<"23:59"){
         final.push(e);
      }
    })
    //console.log(final);
    if(this.props.filterX.morning||this.props.filterX.afternoon||this.props.filterX.evening){
      flag=false;
    }
    if(flag)
    {
      final = temp4;
    }
    var count=0;
    this.state.data=[];

    final.map(data=>
    {
      count++;
      const total=data.total.substring(3);
      this.state.data.push(<ShowFlight  total={total} cls={data.cabin} aircraft={data.aircraft} noOfStops={data.noOfStops} specialElement={data.specialElement} duration={data.duration} departure_time={data.departure_time} arrival_time={data.arrival_time} stops={data.stops} carrier={data.carrier} carrier_no={data.carrier_no}
        departure_date={data.departure_date} arrival_date={data.arrival_date} cabin={data.cabin} key={count} id={count} airlineName={data.airlineName} />);
    })
    return (
      <div>
      {this.state.data?this.state.data:(<h3>No Flghts Available</h3>)}
      </div>
    )
  }
  else {
    return null;
  }
  }
}
function mapStateToProps(state) {
  return {

           filterX: state.FilterOption,
           sort: state.available_flight.sort
         }
}
export default connect(mapStateToProps)(AllFlights)
