import React, { Component } from 'react';
import {connect} from 'react-redux';

class FilterOptions extends Component{

  render(){

    return (
      <div>
        <h3>Filter By:</h3>
          <ul className="list booking-filters-list">
          <hr className="or" /><hr className="or" />
          <li>
            <h4 className="booking-filters-title">Stops:</h4>
            <div className="checkbox checkbox-warning">
              <input id="nonStop" className="styled" type="checkbox" onChange={this.props.handlerChange} />
              <label htmlFor="checkbox2">
                Non-Stop
              </label>
            </div>
              <div className="checkbox checkbox-warning">
                <input id="oneStop" className="styled" type="checkbox" onChange={this.props.handlerChange} />
                <label htmlFor="checkbox2">
                  1-Stop
                </label>
              </div>
              <div className="checkbox checkbox-warning">
                <input id="twoStop" className="styled" type="checkbox" onChange={this.props.handlerChange} />
                <label htmlFor="checkbox2">
                  2-Stop
                </label>
              </div>
          </li>
          <hr className="or" />
          <li>
            <h4 className="booking-filters-title">Price :</h4>
            <div className="checkbox checkbox-warning">
              <input id="price1" className="styled" type="checkbox" onChange={this.props.handlerChange} />
              <label htmlFor="checkbox2">
                Below 5000
              </label>
            </div>
            <div className="checkbox checkbox-warning">
              <input id="price2" className="styled" type="checkbox" onChange={this.props.handlerChange} />
              <label htmlFor="checkbox2">
                5000-15000
              </label>
            </div>
            <div className="checkbox checkbox-warning">
              <input id="price3" className="styled" type="checkbox" onChange={this.props.handlerChange} />
              <label htmlFor="checkbox2">
                15000+
              </label>
            </div>
          </li>
          <hr className="or" />
          <li>
            <h4 className="booking-filters-title">Flight Class:</h4>
            <div className="checkbox checkbox-warning">
              <input id="economy" className="styled" type="checkbox" onChange={this.props.handlerChange} />
              <label htmlFor="checkbox2">
                Economy
              </label>
            </div>
            <div className="checkbox checkbox-warning">
              <input id="business" className="styled" type="checkbox" onChange={this.props.handlerChange} />
              <label htmlFor="checkbox2">
                Business
              </label>
            </div>
            <div className="checkbox checkbox-warning">
              <input id="first" className="styled" type="checkbox" onChange={this.props.handlerChange} />
              <label htmlFor="checkbox2">
                First
              </label>
            </div>
          </li>
          <hr className="or" />
          <li>
            <h4 className="booking-filters-title">Airlines:</h4>
            <div className="checkbox checkbox-warning">
              <input id="lufthansa" className="styled" type="checkbox" onChange={this.props.handlerChange} />
              <label htmlFor="checkbox2">
                Lufthansa
              </label>
            </div>
            <div className="checkbox checkbox-warning">
              <input id="britishairways" className="styled" type="checkbox" onChange={this.props.handlerChange} />
              <label htmlFor="checkbox2">
                British Airways
              </label>
            </div>
            <div className="checkbox checkbox-warning">
              <input id="swiss" className="styled" type="checkbox" onChange={this.props.handlerChange} />
              <label htmlFor="checkbox2">
                SWISS
              </label>
            </div>
            <div className="checkbox checkbox-warning">
              <input id="klm" className="styled" type="checkbox" onChange={this.props.handlerChange} />
              <label htmlFor="checkbox2">
                KLM
              </label>
            </div>
            <div className="checkbox checkbox-warning">
              <input id="jetairways" className="styled" type="checkbox" onChange={this.props.handlerChange} />
              <label htmlFor="checkbox2">
                Jet Airways
              </label>
            </div>
            <div className="checkbox checkbox-warning">
              <input id="airindia" className="styled" type="checkbox" onChange={this.props.handlerChange} />
              <label htmlFor="checkbox2">
                Air India
              </label>
            </div>
          </li>
          <hr className="or" />
          <li>
            <h4 className="booking-filters-title">Departure Time</h4>
            <div className="checkbox checkbox-warning">
              <input id="Morning" className="styled" type="checkbox" onChange={this.props.handlerChange}/>
              <label htmlFor="checkbox2">
                Morning (5:00am - 11:59am)
              </label>
            </div>
            <div className="checkbox checkbox-warning">
              <input id="Afternoon" className="styled" type="checkbox" onChange={this.props.handlerChange} />
              <label htmlFor="checkbox2">
                Afternoon (12:00pm - 5:59pm)
              </label>
            </div>
            <div className="checkbox checkbox-warning">
              <input id="Evening" className="styled" type="checkbox" onChange={this.props.handlerChange} />
              <label htmlFor="checkbox2">
                Evening (6:00pm - 11:59pm)
              </label>
            </div>
          </li>
          </ul>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
            filterX : state.FilterOption
         }
}
export default connect(mapStateToProps)(FilterOptions)
