"use strict";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/routeActions";
import { login } from "../../actions/authActions";
import Button from "../Button";
import Facebook from "./Facebook";
import Google from "./Google";
import InputField from "../InputField";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this._handleClose = this._handleClose.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleClose() {
    this.props.dispatch(changeRoute("MARKETPLACE"));
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
          <div className="login mdl-card mdl-shadow--2dp">
            <div className="mdl-card__supporting-text mdl-card--border">
              <Button name="Close" type="button" onClick={this._handleClose} />
              <div><Facebook /></div>
              <div><Google /></div>
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
                <div>
                  <Button name="Login" type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Login);
