"use strict";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/routeActions";
import { login } from "../../actions/authActions";
import Button from "../Button";
import InputField from "../InputField";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this._handleClose = this._handleClose.bind(this);
    this._goToSignup = this._goToSignup.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._documentClickHandler = this._documentClickHandler.bind(this);
  }
  componentDidMount() {
    document.addEventListener("click", this._documentClickHandler);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this._documentClickHandler);
  }
  _documentClickHandler() {
    this.props.dispatch(changeRoute("MARKETPLACE"));
  }
  _handleClick(e) {
     e.nativeEvent.stopImmediatePropagation();
  }
  _handleClose() {
    this.props.dispatch(changeRoute("MARKETPLACE"));
  }
  _goToSignup() {
    this.props.dispatch(changeRoute("SIGNUP"));
  }
  _handleSubmit(event) {
    event.preventDefault();

    let email = this.refs.email.state.fieldValue;
    let password = this.refs.password.state.fieldValue;

    if (email && password) {
      this.props.dispatch(login({
        auth_key: email,
        password: password
      }))
    };
  }

  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <div className="login full-screen mdl-card mdl-shadow--2dp" onClick={this._handleClick}>
            <div className="mdl-cell--hide-phone">
              <Button name="Log In" disabled={true} className="mdl-button mdl-js-button mdl-card__return disabled--color-black text--left margin-left--15" type="button" onClick={this._handleClose} />
            </div>
            <div className="mdl-cell--hide-tablet mdl-cell--hide-desktop">
              <Button name=" Log In" icon={<i className="material-icons button__return-icon">arrow_back</i>} className="mdl-button mdl-js-button mdl-card__return mdl-button--raised mdl-js-ripple-effect mdl-button--primary text--left" type="button" onClick={this._handleClose} />
            </div>
            <div className="mdl-card__supporting-text padding-top--0 mdl-card--border">
              <form onSubmit={this._handleSubmit}>
                <div>
                  <InputField
                    fieldId="email"
                    fieldName="Email"
                    fieldType="text"
                    ref="email" />
                </div>
                <div>
                  <InputField
                    fieldId="password"
                    fieldName="Password"
                    fieldType="password"
                    ref="password" />
                </div>
                <Button name="Forgot Password" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent font-size--10 margin-top---20" onClick={this._goToSignup} type="button" />
                <div>
                  <Button name="Log in" className="mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" type="submit" />
                </div>
              </form>
              Not yet a member? <Button name="Sign up!" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent" onClick={this._goToSignup} type="button" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Login);
