import React, { Component } from 'react';

export default class HotelTab extends Component {
  render() {
    return (
      <div className="tab-pane fade" id="tab-1">
          <h2>Search and Save on Hotels</h2>
          <form>
              <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-map-marker input-icon"></i>
                  <label>Where are you going?</label>
                  <input className="typeahead form-control" placeholder="City, Airport, Point of Interest or U.S. Zip Code" type="text" />
              </div>
              <div className="input-daterange" data-date-format="M d, D">
                  <div className="row">
                      <div className="col-md-3">
                          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-highlight"></i>
                              <label>Check-in</label>
                              <input className="form-control" name="start" type="text" />
                          </div>
                      </div>
                      <div className="col-md-3">
                          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-highlight"></i>
                              <label>Check-out</label>
                              <input className="form-control" name="end" type="text" />
                          </div>
                      </div>
                      <div className="col-md-3">
                          <div className="form-group form-group-lg form-group-select-plus">
                              <label>Rooms</label>
                              <div className="btn-group btn-group-select-num" data-toggle="buttons">
                                  <label className="btn btn-primary active">
                                      <input type="radio" name="options" />1</label>
                                  <label className="btn btn-primary">
                                      <input type="radio" name="options" />2</label>
                                  <label className="btn btn-primary">
                                      <input type="radio" name="options" />3</label>
                                  <label className="btn btn-primary">
                                      <input type="radio" name="options" />3+</label>
                              </div>
                              <select className="form-control hidden">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option selected="selected">4</option>
                                  <option>5</option>
                                  <option>6</option>
                                  <option>7</option>
                                  <option>8</option>
                                  <option>9</option>
                                  <option>10</option>
                                  <option>11</option>
                                  <option>12</option>
                                  <option>13</option>
                                  <option>14</option>
                              </select>
                          </div>
                      </div>
                      <div className="col-md-3">
                          <div className="form-group form-group-lg form-group-select-plus">
                              <label>Guests</label>
                              <div className="btn-group btn-group-select-num" data-toggle="buttons">
                                  <label className="btn btn-primary active">
                                      <input type="radio" name="options" />1</label>
                                  <label className="btn btn-primary">
                                      <input type="radio" name="options" />2</label>
                                  <label className="btn btn-primary">
                                      <input type="radio" name="options" />3</label>
                                  <label className="btn btn-primary">
                                      <input type="radio" name="options" />3+</label>
                              </div>
                              <select className="form-control hidden">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option selected="selected">4</option>
                                  <option>5</option>
                                  <option>6</option>
                                  <option>7</option>
                                  <option>8</option>
                                  <option>9</option>
                                  <option>10</option>
                                  <option>11</option>
                                  <option>12</option>
                                  <option>13</option>
                                  <option>14</option>
                              </select>
                          </div>
                      </div>
                  </div>
              </div>
              <button className="btn btn-primary btn-lg" type="submit">Search for Hotels</button>
          </form>
      </div>


    )
  }
}
