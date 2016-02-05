"use strict";
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth_actions";
import Facebook from "./Facebook";
import InputField from "../InputField";
import Link from "../Link";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      <div className="login-container">
        <div className="mdl-card mdl-shadow--2dp login-card">
          <div className="mdl-card__supporting-text mdl-card--border">
            <div><Facebook /></div>
            <form>
              <div>
                <InputField
                  id="email"
                  name="Email"
                  type="text"
                  styles="login-card__input-field"
                  ref="email" />
              </div>
              <div>
                <InputField
                  id="password"
                  name="Password"
                  type="password"
                  styles="login-card__input-field"
                  ref="password" />
              </div>
              <Link
                route="NEWPASSWORD"
                styles="login-card__forgot-password"
              >
                  Forgot password?
              </Link>
              <button type="button"
                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent login-card__submit-btn"
                onClick={this.handleSubmit}
              >
                Log in
              </button>
            </form>
            <Link
              route="MARKETPLACE"
              styles="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect login-card__cancel-btn"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Login)
