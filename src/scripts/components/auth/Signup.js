// Form could be own component
// Can Login and Signup forms be one?
// Add avatar, paperclip functionality
"use strict";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/routeActions";
import { signup } from "../../actions/authActions";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import Select from "../../components/Select";
import Facebook from "./Facebook";
import Google from "./Google";
import "./signup.css";

class Signup extends Component {

  static propTypes = {
    months: PropTypes.array,
    days: PropTypes.array,
    years : PropTypes.array
  }

  constructor(props) {
    super(props);
    this._handleClose = this._handleClose.bind(this);
    this._goToLogin = this._goToLogin.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._documentClickHandler = this._documentClickHandler.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this._monthChanged = this._monthChanged.bind(this);
    this._yearChanged = this._yearChanged.bind(this);
    this._handleGoBack = this._handleGoBack.bind(this);

    this.props.months = [];
    this.props.years = [];

    this.props.months.push({value:1, name:"January"});
    this.props.months.push({value:2, name:"February"});
    this.props.months.push({value:3, name:"March"});
    this.props.months.push({value:4, name:"April"});
    this.props.months.push({value:5, name:"May"});
    this.props.months.push({value:6, name:"June"});
    this.props.months.push({value:7, name:"July"});
    this.props.months.push({value:8, name:"August"});
    this.props.months.push({value:9, name:"September"});
    this.props.months.push({value:10, name:"October"});
    this.props.months.push({value:11, name:"November"});
    this.props.months.push({value:12, name:"December"});
    
    for(var i= new Date().getFullYear(); i > 1900; i--) {
      this.props.years.push({value:i, name:i});
    }

    this.state = { month: false, year: false, days: [] };
  }
  componentDidMount() {
    document.addEventListener("click", this._documentClickHandler);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this._documentClickHandler);
  }
  _documentClickHandler() {
    this._handleClose();
  }
  _handleClick(e) {
     e.nativeEvent.stopImmediatePropagation();
  }
  _handleClose() {
    this.props.dispatch(changeRoute("MARKETPLACE"));
  }
  _goToLogin() {
    this.props.dispatch(changeRoute("LOGIN"));
  }
  _monthChanged(e) {
    var month = e.target.value;
    this.setState({month: month});
    this._setDays(this.state.year, month);
  }
  _yearChanged(e) {
    var year = e.target.value;
    this.setState({year: year});
    this._setDays(year, this.state.month);
  }
  _setDays(year,month) {
    this.setState({days: []});
    if (year && month) {
      var days = new Date(year, month, 0).getDate()
      var Days = [];
      for(var i=1; i <= days; i++) {
        Days.push({value:i, name:i});
      }
      this.setState({days: Days});
    }
  }
  _handleGoBack() {
      this.props.dispatch(changeRoute("GOBACK"));
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
          <div className="signup auth--full-screen-phone mdl-card mdl-shadow--2dp" onClick={this._handleClick}>
            <div className="mdl-cell--hide-phone">
              <Button className="mdl-button--icon modal__close-button" icon={<i className="material-icons">close</i>} type="button" onClick={this._handleClose} />
              <h5 className="modal__title">Sign up</h5>
            </div>
            <div className="mdl-cell--hide-tablet mdl-cell--hide-desktop">
              <Button name="Sign Up" icon={<i className="material-icons back-button__icon">arrow_back</i>} className="back-button mdl-button--raised mdl-button--primary" type="button" onClick={this._handleGoBack} />
            </div>
            <div className="mdl-cell mdl-cell--12-col"><Facebook /></div>
            <div className="mdl-cell mdl-cell--12-col"><Google /></div>
            <div className="mdl-card--border mdl-cell mdl-cell--12-col">
              <form onSubmit={this._handleSubmit}>
                <div>
                  <InputField fieldId="name" fieldName="Name" fieldType="text" ref="name" />
                </div>
                <div>
                  <InputField fieldId="email" fieldName="Email" fieldType="text" ref="email" />
                </div>
                <div>
                  <InputField fieldId="password" fieldName="Password" fieldType="password" ref="password" />
                </div>
                <label className="birthday__label">Birthday</label>
                <div className="mdl-cell mdl-cell--12-col birthday__datepicker">
                  <Select className="birthday__select" onChange={this._yearChanged} options={this.props.years} id="birthday-year" name="Year" />
                  <Select className="birthday__select birthday__select--side-margin" onChange={this._monthChanged} options={this.props.months} id="birthday-month" name="Month" />
                  <Select className="birthday__select" disabled={!this.state.days.length} key={this.state.days} options={this.state.days} id="birthday-day" name="Day" />
                </div>
                <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect signup__news" htmlFor="checkboxNews">
                  <input type="checkbox" id="checkboxNews" className="mdl-checkbox__input"/>
                  <span className="mdl-checkbox__label">Tell me about FitBird news</span>
                </label>
                <div>
                  <Button name="SIGN UP" className="mdl-cell mdl-cell--12-col mdl-button--raised mdl-button--accent" type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
    )
  }
}

export default connect()(Signup);
