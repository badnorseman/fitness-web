"use strict";
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { goTo } from "../../actions/router_actions";
import { login } from "../../actions/auth_actions";
import Facebook from "./Facebook";
import InputField from "../InputField";
import Link from "../Link";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleForgotPassword = this.handleForgotPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      <div>
        <button id="login--open" type="button" className="mdl-navigation__link">
          Log in
        </button>
        <dialog id="login" className="mdl-dialog">
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
              className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent login__button"
              onClick={this.handleSubmit}
            >
              LOG IN
            </button>
          </form>
          <button id="login--close" type="button"
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect login__button">
            Close
          </button>
        </dialog>
      </div>
    )
  }

  componentDidMount() {
    const dialog = document.getElementById("login");

    if (!dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }

    document.getElementById("login--open").addEventListener("click", () => {
      dialog.showModal();
    })

    document.getElementById("login--close").addEventListener("click", () => {
      dialog.close();
    })
  }

  componentWillUnmount() {
    document.getElementById("login--open").removeEventListener("click")
    document.getElementById("login--close").removeEventListener("click")
  }
}

export default connect()(Login)
