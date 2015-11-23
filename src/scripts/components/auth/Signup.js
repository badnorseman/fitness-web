// Form could be own component
// Can Login and Signup forms be one?
// Add avatar, paperclip functionality
"use strict";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/routeActions";
import { signup } from "../../actions/authActions";
import Auth0Signup from "./Auth0Signup";
import Auth0Variables from "../../constants/auth0Variables";
import Facebook from "./Facebook";
import Google from "./Google";
import IconButton from "../IconButton";
import InputField from "../../components/InputField";
import "./signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this._handleClose = this._handleClose.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._signupCallback = this._signupCallback.bind(this);
  }

  componentWillMount() {
    this.auth0 = new Auth0({
      clientID: Auth0Variables.AUTH0_CLIENT_ID,
      domain: Auth0Variables.AUTH0_DOMAIN
    });
  }

  _handleClose() {
    this.props.dispatch(changeRoute("MARKETPLACE"));
  }

  _handleSubmit(event) {
    event.preventDefault();

    let email = this.refs.email.state.fieldValue;
    let name = this.refs.name.state.fieldValue;
    let password = this.refs.password.state.fieldValue;

    if (email && name && password) {
      this.auth0.signup({
        sso: false,
        auto_login: true,
        connection: "Username-Password-Authentication",
        email: email,
        password: password
      }, this._signupCallback);
    }
  }

  _signupCallback(error, profile, token) {
    if (token) {
      let data = {
        user_metadata: { name: this.refs.name.state.fieldValue }
      };
      console.log("Signed up:", profile, token, data);
    } else {
      console.log("Error:", error);
    }
    // this.props.dispatch(signup(error, profile, token, data));
  }

  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <div className="signup mdl-card mdl-shadow--2dp">
            <div className="mdl-card__menu">
              <IconButton
                name="close"
                onClick={this._handleClose} />
            </div>
            <div className="mdl-card__supporting-text mdl-card--border">
              <div><Auth0Signup /></div>
              <div><Facebook /></div>
              <div><Google /></div>
              <form onSubmit={this._handleSubmit}>
                <div>
                  <InputField
                    fieldId="Name"
                    fieldName="Name"
                    fieldType="text"
                    styles="signup__input-field"
                    ref="name" />
                </div>
                <div>
                  <InputField
                    fieldId="email"
                    fieldName="Email"
                    fieldType="text"
                    styles="signup__input-field"
                    ref="email" />
                </div>
                <div>
                  <InputField
                    fieldId="password"
                    fieldName="Password"
                    fieldType="password"
                    styles="signup__input-field"
                    ref="password" />
                </div>
                <button
                  className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent signup-button"
                  type="submit">
                  SIGN UP
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Signup);
