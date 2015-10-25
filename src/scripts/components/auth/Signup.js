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
import "./signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this._handleClose = this._handleClose.bind(this);
    this._goToLogin = this._goToLogin.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  _handleClose() {
    this.props.dispatch(changeRoute("MARKETPLACE"));
  }
  _goToLogin() {
    this.props.dispatch(changeRoute("LOGIN"));
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
          <div className="login full-screen mdl-card mdl-shadow--2dp">
            <div className="mdl-cell--hide-phone">
              <Button name="Sign Up" disabled="true" className="mdl-button mdl-js-button mdl-card__return disabled--color-black text--left margin-left--15px" type="button" onClick={this._handleClose} />
            </div>
            <div className="mdl-cell--hide-tablet mdl-cell--hide-desktop">
              <Button name="&larr; Sign Up" className="mdl-button mdl-js-button mdl-card__return mdl-button--raised mdl-js-ripple-effect mdl-button--primary text--left" type="button" onClick={this._handleClose} />
            </div>
            <div className="mdl-card__supporting-text mdl-card--border padding-top--0">
              <form onSubmit={this._handleSubmit}>
                <div>
                  <InputField fieldId="firstName" fieldName="First Name" fieldType="text" ref="firstName" />
                </div>
                <div>
                  <InputField fieldId="lastName" fieldName="Last Name" fieldType="text" ref="lastName" />
                </div>
                <div>
                  <InputField fieldId="email" fieldName="Email" fieldType="text" ref="email" />
                </div>
                <div>
                  <InputField fieldId="password" fieldName="Password" fieldType="password" ref="password" />
                </div>
                <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect text--left margin--8px" htmlFor="checkboxNews">
                  <input type="checkbox" id="checkboxNews" className="mdl-checkbox__input"/>
                  <span className="mdl-checkbox__label">Tell me about FitBird news</span>
                </label>
                <div>
                  <Button name="SIGN UP" className="mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" type="submit" />
                </div>
              </form>
              Already a member? 
              <Button name="Sign in!" className=" mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent" type="button" onClick={this._goToLogin} />
            </div>
          </div>
        </div>
        </div>
    )
  }
}

export default connect()(Signup);
