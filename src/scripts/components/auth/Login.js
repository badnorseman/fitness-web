"use strict";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/routeActions";
import { login } from "../../actions/authActions";
import Auth0 from "./Auth0";
import Facebook from "./Facebook";
import Google from "./Google";
import IconButton from "../IconButton";
import InputField from "../InputField";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this._handleClose = this._handleClose.bind(this);
    this._handleForgotPassword = this._handleForgotPassword.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleClose() {
    this.props.dispatch(changeRoute("MARKETPLACE"));
  }

  _handleForgotPassword() {
    alert("Coming soon.");
  }

  _handleSubmit(event) {
    event.preventDefault();

    let email = this.refs.email.state.fieldValue;
    let password = this.refs.password.state.fieldValue;

    if (email && password) {
      this.props.dispatch(login({
        auth_key: email,
        password: password
      }));
    }
  }

  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <div className="login mdl-card mdl-shadow--2dp">
            <div className="mdl-card__menu">
              <IconButton
                name="close"
                onClick={this._handleClose} />
            </div>
            <div className="mdl-card__supporting-text mdl-card--border">
              <div><Auth0 lock={this.props.lock}/></div>
              <div><Facebook /></div>
              <div><Google /></div>
              <form onSubmit={this._handleSubmit}>
                <div>
                  <InputField
                    fieldId="email"
                    fieldName="Email"
                    fieldType="text"
                    styles="login__input-field"
                    ref="email" />
                </div>
                <div>
                  <InputField
                    fieldId="password"
                    fieldName="Password"
                    fieldType="password"
                    styles="login__input-field"
                    ref="password" />
                </div>
                <a className="login-forgot-password" href="#!" onClick={this._handleForgotPassword}>
                  Forgot password?
                </a>
                <button
                  className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent login-button"
                  type="submit">
                  LOG IN
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Login);
