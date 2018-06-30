import React, { Component } from 'react';

import Select from 'react-virtualized-select';
import createFilterOptions from 'react-select-fast-filter-options';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css';

import moment from 'moment';
import { fetchData } from './actions';
import {browserHistory} from 'react-router';

import {AsyncTypeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';


import {DropdownButton,MenuItem} from 'react-bootstrap';
import {connect} from "react-redux"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



class FlightTab extends Component {
  constructor(props){
    super(props);
    this.state = {from: '', to: '', startDate: moment(),endDate:moment(),noOfPersons:1,ui:true,roundTrip:false,loading: false,options: []}
    this.handleChange=this.handleChange.bind(this);

  }

  componentWillMount()
    {

     this.props.dispatch({type: 'FETCHED_FALSE'})
     this.props.dispatch({type: 'ADDED_FALSE'})
      /*const data={
        Origin_Code : this.props.params.origin,
        Dest_Code : this.props.params.destination,
        start_Date: this.props.params.departure_date
      }*/
      const data={
        Origin_Code : 'AMD',
        Dest_Code : 'BOM',
        start_Date: '2018-01-21'
      }
      //this.props.dispatch(fetchData(data));
      console.log(this.props);
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

      const data={
        Origin_Code : this.state.from.value,
        Dest_Code : this.state.to.value,
        start_Date: year+'-' + month + '-'+dt,
      }

      this.props.dispatch(fetchData(data));

  }

}
handleChange(e)
{
   this.setState({departure_date: e});
}

handlerFrom(e)
   {
     var temp=this.props.airport_details;
    this.setState({loading: true})
     temp.filter(it=>{
       return it.value.toLowerCase().includes(e.toLowerCase())
     })
     this.setState({loading: false,options: temp})
   }
   handleDateStart(e)
    {
      console.log(e);
      this.setState({startDate: e});
    }
    handleDateEnd(e)
     {
       console.log(e);
       this.setState({endDate: e});
     }
     handleReplaceUI(e){
       this.setState({ui:false});

     }

  render() {


    return (
      <div className="tab-pane fade in active" id="tab-2">
          <h2>Search for Cheap Flights</h2>
          <form>
              <div className="tabbable">
                  <ul className="nav nav-pills nav-sm nav-no-br mb10" id="flightChooseTab">

                      <li className="active"><a href="#flight-search-2" data-toggle="tab" onClick={()=> this.setState({roundTrip:false})}>One Way</a>
                      </li>
                      <li><a href="#flight-search-1" data-toggle="tab" onClick={()=> this.setState({roundTrip:true})}>Round Trip</a>
                      </li>
                  </ul>
                  <div className="tab-content">


                      <div className="tab-pane fade in active" id="flight-search-1">
                          <div className="row">
                              <div className="col-md-6">
                                  <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-map-marker input-icon"></i>
                                      <label>From</label>
                                      <AsyncTypeahead labelKey="value" isLoading={this.state.loading}
                                        minLength={2} useCache={false}
                                        options={this.state.options}
                                        onSearch={this.handlerFrom.bind(this)}
                                        onChange={this.handleInput.bind(this)}
                                        placeholder='City, Code or Airport Name'
                                        renderMenuItemChildren={(option) => (
                                        <div>
                                        {option.label}
                                        </div>
                                      )}
                                      />
                                  </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-map-marker input-icon"></i>
                                      <label>To</label>
                                      <AsyncTypeahead labelKey="value" isLoading={this.state.loading}
                                        minLength={2} useCache={false}
                                        options={this.state.options}
                                        onSearch={this.handlerFrom.bind(this)}
                                        onChange={this.handleInput2.bind(this)}
                                        placeholder='City, Code or Airport Name'
                                        renderMenuItemChildren={(option) => (
                                        <div>
                                        {option.label}
                                        </div>
                                      )}
                                      />
                                  </div>
                              </div>
                          </div>
                          <div className="input-daterange" data-date-format="M d, D">
                              <div className="row">
                                  <div className="col-md-3">
                                      <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-highlight"></i>
                                          <label>Departure</label>
                                          <DatePicker
                                          selected={this.state.startDate}
                                          selectsStart
                                          startDate={this.state.startDate}
                                          endDate={this.state.endDate}
                                          minDate={moment()}
                                          onChange={this.handleDateStart.bind(this)}
                                          className="form-control"
                                          />
                                      </div>
                                  </div>
                                  {this.state.roundTrip ? (
                                    <div className="col-md-3">
                                        <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-highlight"></i>
                                            <label>Return</label>
                                            <DatePicker
                                            selected={this.state.endDate}
                                            selectsEnd
                                            startDate={this.state.startDate}
                                            endDate={this.state.endDate}
                                            minDate={moment()}
                                            onChange={this.handleDateEnd.bind(this)}
                                            className="form-control"
                                            />
                                        </div>
                                    </div>
                                  ) : null}

                                  <div className="col-md-6">
                                      <div className="form-group form-group-lg form-group-select-plus">
                                          <label>Passengers</label><br />
                                          {this.state.ui ? (
                                            <div className="btn-group btn-group-select-num" data-toggle="buttons">
                                                <div onClick={(event) => console.log(event)} className="btn btn-primary active">1</div>
                                                    <label className="btn btn-primary">
                                                        <input type="radio" name="options" />2</label>
                                                    <label className="btn btn-primary">
                                                    <input type="radio" name="options" />3</label>
                                                <label onClick={this.handleReplaceUI.bind(this)} className="btn btn-primary">
                                                    <input type="radio" name="options" />3+</label>
                                            </div>
                                          ) : (
                                            <select className="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                            </select>
                                          )}


                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>


                  </div>
              </div>
              <button className="btn btn-primary btn-lg" type="submit" onClick={this.handlerSubmit.bind(this)} disabled={!Boolean(this.state.from && this.state.to && this.state.startDate.format())}>Search For Flights</button>
          </form>
      </div>


    )
  }
}

function mapStateToProps(state) {
  return {
           airport_details: state.airport_details.airport_details,
           airports: state.airport_details.airportsname,
           filters: state.airport_details.filter,
           filterX: state.FilterOption
         }
}

export default connect(mapStateToProps)(FlightTab)
