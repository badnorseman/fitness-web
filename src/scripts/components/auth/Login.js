"use strict";
import React, { Component, PropTypes } from "react";
import Button from "../Button";
import InputField from "../InputField";
import Oauth from "./Oauth";

export default class Login extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this._handleClose = this._handleClose.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleClose() {
    this.props.onClose();
  }

  _handleSubmit(event) {
    event.preventDefault();

    let email = this.refs.email.state.fieldValue;
    let password = this.refs.password.state.fieldValue;

    if (email && password) {
      this.props.onLogin({
        auth_key: email,
        password: password
      })
    };
  }

  render() {
    return (
      <div className="mdl-grid text-center">
        <div className="mdl-cell mdl-cell--12-col">
          <div><Oauth provider="facebook"/></div>
          <div className="divider"></div>
          <div><Oauth provider="google_oauth2" /></div>
          <div>
            <form onSubmit={this._handleSubmit}>
              <div>
                <InputField
                  fieldId="email"
                  fieldName="Email"
                  fieldType="text"
                  ref="email">
                </InputField>
              </div>
              <div>
                <InputField
                  fieldId="password"
                  fieldName="Password"
                  fieldType="password"
                  ref="password">
                </InputField>
              </div>
              <div>
                <Button name="Close" onClick={this._handleClose} />
                <div className="divider"></div>
                <Button name="Log In" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
