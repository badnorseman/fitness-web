// Form could be own component
// Can Login and Signup forms be one?
// Add avatar, paperclip functionality
"use strict";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/routeActions";
import { signup } from "../../actions/authActions";
import Facebook from "./Facebook";
import Google from "./Google";
import IconButton from "../IconButton";
import InputField from "../../components/InputField";
import Select from "../Select";
import "./signup.css";

class Signup extends Component {

  static defaultProps = {
    months : [
      {value:1, name:"January"},
      {value:2, name:"February"},
      {value:3, name:"March"},
      {value:4, name:"April"},
      {value:5, name:"May"},
      {value:6, name:"June"},
      {value:7, name:"July"},
      {value:8, name:"August"},
      {value:9, name:"September"},
      {value:10, name:"October"},
      {value:11, name:"November"},
      {value:12, name:"December"}
    ],
    years : function() {
      let years = [];
      for(let i= new Date().getFullYear(); i > 1900; i--) {
        years.push({value:i, name:i});
      }
      return years;
    }
  }

  constructor(props) {
    super(props);
    this._monthChanged = this._monthChanged.bind(this);
    this._yearChanged = this._yearChanged.bind(this);
    this._handleClose = this._handleClose.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);

    this.state = { month: false, year: false, calendarDays: [] };
  }

   _monthChanged(e) {
    const month = e.target.value;
    this.setState({month: month});
    this._setCalendarDays(this.state.year, month);
  }

  _yearChanged(e) {
    const year = e.target.value;
    this.setState({year: year});
    this._setCalendarDays(year, this.state.month);
  }

  _setCalendarDays(year,month) {
    if (year && month) {
      const calendarDaysTotal = new Date(year, month, 0).getDate()
      const calendarDays = [];
      for(let i=1; i <= calendarDaysTotal; i++) {
        calendarDays.push({value:i, name:i});
      }
      this.setState({calendarDays: calendarDays});
    }
  }

  _handleClose() {
    this.props.dispatch(changeRoute("MARKETPLACE"));
  }

  _handleSubmit(event) {
    event.preventDefault();

    let email = this.refs.email.state.fieldValue;
    let password = this.refs.password.state.fieldValue;
    let passwordConfirmation = this.refs.passwordConfirmation.state.fieldValue;

    if (email && password && passwordConfirmation) {
      this.props.dispatch(signup({
        email: email,
        password: password,
        password_confirmation: passwordConfirmation
      }))
    };
  }

  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <div className="signup mdl-card mdl-shadow--2dp">
            <div className="mdl-card__menu">
              <IconButton
                name="close"
                onClick={this._handleClose} />
            </div>
            <div className="mdl-card__supporting-text mdl-card--border">
              <div><Facebook /></div>
              <div><Google /></div>
              <form onSubmit={this._handleSubmit}>
                <div>
                  <InputField
                    fieldId="email"
                    fieldName="Email"
                    fieldType="text"
                    styles="signup__input-field"
                    ref="email" />
                </div>
                <div>
                  <InputField
                    fieldId="password"
                    fieldName="Password"
                    fieldType="password"
                    styles="signup__input-field"
                    ref="password" />
                </div>
                <div>
                  <InputField
                    fieldId="passwordConfirmation"
                    fieldName="Confirm password"
                    fieldType="password"
                    styles="signup__input-field"
                    ref="passwordConfirmation" />
                </div>

                <label>Birthday</label>
                <div>
                  <Select 
                    styles="birthday__select" 
                    onChange={this._yearChanged} 
                    options={this.props.years()} 
                    id="birthday-year" 
                    name="Year" />
                  <Select 
                    styles="birthday__select birthday__select-spacing" 
                    onChange={this._monthChanged} 
                    options={this.props.months} 
                    id="birthday-month" 
                    name="Month" />
                  <Select 
                    styles="birthday__select" 
                    disabled={!this.state.calendarDays.length} 
                    key={this.state.calendarDays.length} 
                    options={this.state.calendarDays} 
                    id="birthday-day" 
                    name="Day" />
                </div>

                <button
                  className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent signup-button"
                  type="submit">
                  SIGN UP
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Signup);
