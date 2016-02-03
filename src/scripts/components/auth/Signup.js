// Form could be own component
// Can Login and Signup forms be one?
// Add avatar, paperclip functionality
"use strict";
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { signup } from "../../actions/auth_actions";
import Facebook from "./Facebook";
import InputField from "../../components/InputField";
import Link from "../Link2";
import "./signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();

    let email = this.refs.email.state.fieldValue;
    let name = this.refs.name.state.fieldValue;
    let password = this.refs.password.state.fieldValue;
    let passwordConfirmation = this.refs.passwordConfirmation.state.fieldValue;

    if (email && name && password && passwordConfirmation) {
      this.props.dispatch(signup({
        email: email,
        name: name,
        password: password,
        password_confirmation: passwordConfirmation
      }));
    }
  }

  render() {
    return (
      <div className="signup-container">
        <div className="mdl-card mdl-shadow--2dp signup-card">
          <div className="mdl-card__supporting-text mdl-card--border">
            <div><Facebook /></div>
            <form>
              <div>
                <InputField
                  fieldId="Name"
                  fieldName="Name"
                  fieldType="text"
                  styles="signup-card__input-field"
                  ref="name" />
              </div>
              <div>
                <InputField
                  fieldId="email"
                  fieldName="Email"
                  fieldType="text"
                  styles="signup-card__input-field"
                  ref="email" />
              </div>
              <div>
                <InputField
                  fieldId="password"
                  fieldName="Password"
                  fieldType="password"
                  styles="signup-card__input-field"
                  ref="password" />
              </div>
              <div>
                <InputField
                  fieldId="passwordConfirmation"
                  fieldName="Confirm password"
                  fieldType="password"
                  styles="signup-card__input-field"
                  ref="passwordConfirmation" />
              </div>
              <button type="button"
                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent signup-card__submit-btn"
                onClick={this.handleSubmit}
              >
                Sign up
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

export default connect()(Signup)
