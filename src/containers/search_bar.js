/**
 * Created by desaim on 9/14/2017.
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state ={
      term :''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event){
    this.setState({ term: event.target.value });
  }
  onFormSubmit(event){
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({
      term:''
    })
  }
  render(){
    return(
    <div className="row">
      <div className="col-md-10 col-md-offset-1">

        <div><h1>Weather Forecast</h1></div>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Get a Five-day forecast in your favourite cities in USA"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}/>
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather},dispatch)
}
export default connect(null,mapDispatchToProps) (SearchBar);