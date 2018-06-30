import React from 'react';
import axios from 'axios';
var countries = require('country-list')();

export  function fetchAirportDetails(){
  return dispatch =>{
    fetch('https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json')
    .then(response =>response.json())
    .then( data => {
      const str=[];
      const option=[];
      const airports=[];
      data.map( itr => {
      let flight =itr.code+":" + itr.city + " (" +itr.name+")";
      let flg ='';
      if(countries.getCode(itr.country)!=null)
      flg = 'http://www.countryflags.io/'+countries.getCode(itr.country)+'/flat/32.png';

      const temp=(<div>
                  <div className="row city no-gutters">
                  {itr.city}<span className="code">({itr.code})</span>
                  </div>
                  <div className="name">
                  {itr.country}
                  </div>
                  <span>
                  <img src={flg} />
                  </span>
                  </div>
                  );
                  str.push({value: flight,label: temp});
                 option.push({value: itr.code,label: flight});
                 airports.push({code: itr.code,city: itr.city,name: itr.name})
    })
    dispatch({type: "FETCH_DETAILS_FULFILLED",payload: str})
    dispatch({type: "FETCH_DETAILS_FILTER",payload: option})
    dispatch({type: "FETCH_DETAILS",payload: airports})
    })
    .catch((err)=>{
      dispatch({type: "FETCH_DETAILS_REJECTED",payload: err})
    })
  }
}






export function fetchData(requestParam) {
	console.log("requestParam",requestParam);
	return function(dispatch) {
    return axios({
      method: 'post',
      url: 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyC8YVAkzSSKj2nN8hE96Ev4ua802UaBQfk',
      data: JSON.stringify({
          "request": {
            "passengers": {
              "adultCount": 1
            },
            "slice": [
              {
                "origin": requestParam.Origin_Code,
                "destination": requestParam.Dest_Code,
                "date": requestParam.start_Date
              },
            ],
            "solutions": 100,
            "refundable": false
          }
        }),
      headers: {'Content-Type': 'application/json'}
      })
    .then(function(response) {
    const flight_data=response.data;
    //console.log("RESPONSE.DATA......",flight_data);
    const availableFlights=[];

    flight_data.trips.tripOption.map((data)=>{
      let totalCost = data.saleTotal;
      let totalDuration = ' ';

      let originCode=' ';
      let destinationCode=' ';
      let duration = ' ';
      let aircraft = ' ';
      let connectionDuration = ' ';
      let carrier =' ';
      let carrier_no = ' ';
      let cabin = ' ';
      let departure_date=' ';
      let arrival_date=' ';
      let departure_time=' ';
      let arrival_time=' ';

      let origin_departure_time=' ';
      let origin_departure_date=' ';
      let destination_arrival_date=' ';
      let destination_arrival_time=' ';

      let specialElement = [];
      let childElement = ' ';
      let count=0;
      let duration_in_minut='';
      let departure_time_24='';
      let arrival_time_24='';
      let airlineName ='';
      data.slice.map(eachslice=>{
        totalDuration = eachslice.duration;
        duration_in_minut=totalDuration;
        let hour=Math.floor(parseInt(totalDuration,10)/60);
        let minute=parseInt(totalDuration,10)%60;
        totalDuration= hour+"h "+minute+"m";

        count=0;
        const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
        eachslice.segment.map(eachSegment=>{
          carrier = eachSegment.flight.carrier;
          carrier_no = eachSegment.flight.number;


          let dateStamp;
          let year;
          let month;
          let date;
          let time;
          let hour='';
          let hr='';
          let ampm;
          let flag=0;

          eachSegment.leg.map(eachleg=>{

            dateStamp=eachleg.departureTime.toString();
            year = dateStamp.substring(0,4);
            month = dateStamp.substring(5,7);
            date = dateStamp.substring(8,10);
            departure_date=year+", "+monthNames[month-1]+" "+date;
            time=dateStamp.substring(11,16);
            hour=parseInt(time.substring(0,3));
            hr=hour%12||12;
            ampm =(hour<12||hour===24)?" AM":" PM"
            departure_time=hr+time.substring(2,5)+ampm;
            if(count===0){
             origin_departure_time = departure_time;
             origin_departure_date = departure_date;
             departure_time_24=time;
            }

            dateStamp=eachleg.arrivalTime.toString();
            year = dateStamp.substring(0,4);
            month = dateStamp.substring(5,7);
            date = dateStamp.substring(8,10);
            arrival_date = year+", "+monthNames[month-1]+" "+date;
            time=dateStamp.substring(11,16);
            hour=parseInt(time.substring(0,3));
            hr=hour%12||12;
            ampm =(hour<12||hour===24)?" AM":" PM"
            arrival_time = hr+time.substring(2,5)+ampm;
            if(count===(eachslice.segment.length-1)){
             destination_arrival_time = arrival_time;
             destination_arrival_date = arrival_date;
             arrival_time_24=time;
            }

          aircraft = eachleg.aircraft;
          originCode = eachleg.origin;
          destinationCode = eachleg.destination;
          cabin = eachSegment.cabin;
          duration = eachleg.duration;
          let hrr=Math.floor(parseInt(duration,10)/60);
          let minute=parseInt(duration,10)%60;
          duration= hrr+"h "+minute+"m";


          if(eachSegment.connectionDuration){
            connectionDuration = eachSegment.connectionDuration;
            let hour=Math.floor(parseInt(connectionDuration,10)/60);
            let minute=parseInt(connectionDuration,10)%60;
            connectionDuration= hour+"h "+minute+"m";

            flag=1;
        // console.log("FLAG....",flag);
        //    console.log("connectionDuration...",connectionDuration);
          }

          let aircraftName = '';
          flight_data.trips.data.aircraft.map(itr => {
            if(itr.code===eachleg.aircraft){
              aircraftName = itr.name;
            }
          })

          let originAirportName = '';
          flight_data.trips.data.airport.map(itr => {
            if(itr.code===eachleg.origin){
              originAirportName = itr.name;
            }
          })

          let destinationAirportName = '';
          flight_data.trips.data.airport.map(itr => {
            if(itr.code===eachleg.destination){
              destinationAirportName = itr.name;
            }
          })

          let originCityName = '';
          flight_data.trips.data.city.map(itr => {
            if(itr.code===eachleg.origin){
              originCityName = itr.name;
            }
          })

          let destinationCityName = '';
          flight_data.trips.data.city.map(itr => {
            if(itr.code===eachleg.destination){
              destinationCityName = itr.name;
            }
          })


          flight_data.trips.data.carrier.map(itr => {
            if(itr.code===carrier){
              airlineName = itr.name;
            }
          })



          childElement = (<div key={count} id="Fligh_Details" className="booking-item-details">
            <div className="row">
              <div className="col-md-8">
                <hr />
                <h5 className="list-title"> {originCityName} ({originCode}) to {destinationCityName} ({destinationCode})</h5>
                <ul className="list">
                  <li>{airlineName} :- {carrier} - {carrier_no}</li>
                  <li>Origin Airport Name : {originAirportName}</li>
                  <li>Destination Airport Name : {destinationAirportName}</li>
                  <li>Class: {cabin} , Aircraft Type: {aircraftName}</li>
                  <li>Departure : {departure_time} ---- {departure_date}</li>
                  <li>Arrival : {arrival_time}   ---- {arrival_date}</li>
                  <li>Duration In Air: {duration}</li>
                </ul>
                <hr />
                { flag ? (<p>Stopover Time : {destinationCode} : {connectionDuration}</p>):
                 (<p>Total Trip Time : {totalDuration}</p>)
                }
              </div>
            </div>
          </div>)
          //console.log("counter: ",count);
          //console.log("CHILD....",childElement);
          specialElement.push(childElement);
        })
        count++;
        //console.log("special",specialElement);
      })
    })
      availableFlights.push({airlineName: airlineName,duration_in_minut: duration_in_minut,departure_time_24: departure_time_24,arrival_time_24: arrival_time_24,total: totalCost, cabin:cabin, duration: totalDuration,noOfStops:count-1, specialElement:specialElement, departure_date: origin_departure_date,arrival_date: destination_arrival_date,departure_time: origin_departure_time,arrival_time: destination_arrival_time,aircraft: aircraft,carrier:carrier,carrier_no:carrier_no})
    })
			dispatch({type: 'FETCH_FLIGHTS_FULFILLED',payload: availableFlights});
      dispatch({type: 'TRIPS_DETAILs',payload: {from: requestParam.Origin_Code,to: requestParam.Dest_Code,date: requestParam.start_Date}})
			})
      .catch((err)=>{
        dispatch({type: "FETCH_FLIGHTS_REJECTED",payload: err})
      })
	}
};
