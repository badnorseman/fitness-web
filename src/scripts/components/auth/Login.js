"use strict";
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth_actions";
import Facebook from "./Facebook";
import Inputfield from "../Inputfield";
import Link from "../Link";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();

    let email = this.refs.email.state.value;
    let password = this.refs.password.state.value;

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
        <div className="mdl-card mdl-shadow--2dp login">
          <div className="mdl-card__supporting-text">
            <div><Facebook /></div>
            <form>
              <div>
                <Inputfield
                  id="email" label="Email" type="text"
                  styles="login__input-field"
                  ref="email" />
              </div>
              <div>
                <Inputfield
                  id="password" label="Password" type="password"
                  styles="login__input-field"
                  ref="password" />
              </div>
              <Link
                route="NEWPASSWORD"
                styles="login__forgot-password"
              >
                  Forgot password?
              </Link>
              <button type="button"
                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent login__submit-btn"
                onClick={this.handleSubmit}
              >
                Log in
              </button>
            </form>
            <Link
              route="MARKETPLACE"
              styles="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect login__cancel-btn"
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
