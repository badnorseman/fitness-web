// Form could be own component
// Can Login and Signup forms be one?
// Add avatar, paperclip functionality
"use strict";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/route_actions";
import { signup } from "../../actions/auth_actions";
import Auth0Signup from "./Auth0Signup";
import Facebook from "./Facebook";
import IconButton from "../IconButton";
import InputField from "../../components/InputField";
import "./signup.css";

class Signup extends Component {
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
    let name = this.refs.name.state.fieldValue;
    let password = this.refs.password.state.fieldValue;
    let passwordConfirmation = this.refs.passwordConfirmation.state.fieldValue;

    if (email && name && password && passwordConfirmation) {
      this.props.dispatch(signup({
        email: email,
        password: password,
        password_confirmation: passwordConfirmation
      }));
    }
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
                <div>
                  <InputField
                    fieldId="passwordConfirmation"
                    fieldName="Confirm password"
                    fieldType="password"
                    styles="signup__input-field"
                    ref="passwordConfirmation" />
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
