"use strict";
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { goTo } from "../../actions/router_actions";
import { login } from "../../actions/auth_actions";
import Facebook from "../auth/Facebook";
import InputField from "../InputField";
import "./login2.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleForgotPassword = this.handleForgotPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose() {
    this.props.dispatch(goTo("MARKETPLACE"));
  }

  handleForgotPassword() {
    this.props.dispatch(goTo("NEWPASSWORD"));
  }

  handleSubmit(ev) {
    ev.preventDefault();

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
      <div className="login__container">
        <div className="login">
          <div><Facebook /></div>
          <form>
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
            <a href="#!"
              className="login__forgot-password"
              onClick={this.handleForgotPassword}>
                Forgot password?
            </a>
            <button type="button"
              className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent login__submit-btn"
              onClick={this.handleSubmit}
            >
              Log in
            </button>
          </form>
          <button type="button"
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect login__cancel-btn"
            onClick={this.handleClose}
          >
            Cancel
          </button>
        </div>
      </div>
    )
  }
}

export default connect()(Login)
