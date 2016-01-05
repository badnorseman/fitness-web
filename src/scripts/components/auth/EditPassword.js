"use strict";
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/router_actions";
import { updatePassword } from "../../actions/password_actions";
import InputField from "../InputField";
import Link from "../Link";
import "./login.css";

class PasswordUpdate extends Component {
  constructor(props) {
    super(props);
    this._handleClose = this._handleClose.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleClose() {
    this.props.dispatch(changeRoute("MARKETPLACE"));
  }

  _handleSubmit(ev) {
    ev.preventDefault();

    let current_password = this.refs.currentPassword.state.fieldValue;
    let password = this.refs.password.state.fieldValue;
    let passwordConfirmation = this.refs.passwordConfirmation.state.fieldValue;

    if (current_password && password && passwordConfirmation) {
      this.props.dispatch(updatePassword({
        current_password: current_password,
        password: password,
        password_confirmation: passwordConfirmation
      }));
    }
  }

  render() {
    return (
      <div className="mdl-grid login-grid">
        <div className="mdl-cell mdl-cell--12-col login-grid__cell">
          <div className="mdl-card mdl-shadow--2dp login-card">
            <div className="mdl-card__supporting-text mdl-card--border">
              <form>
                <div>
                  <InputField
                    fieldId="currentPassword"
                    fieldName="Current password"
                    fieldType="password"
                    styles="login-card__input-field"
                    ref="currentPassword" />
                </div>
                <div>
                  <InputField
                    fieldId="password"
                    fieldName="Password"
                    fieldType="password"
                    styles="login-card__input-field"
                    ref="password" />
                </div>
                <div>
                  <InputField
                    fieldId="passwordConfirmation"
                    fieldName="Confirm password"
                    fieldType="password"
                    styles="login-card__input-field"
                    ref="passwordConfirmation" />
                </div>
                <button
                  className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent login-card__login-button"
                  onClick={this._handleSubmit}
                >
                  UPDATE
                </button>
              </form>
            </div>
            <div className="mdl-card__menu">
              <Link
                styles="mdl-button mdl-js-button mdl-button--icon"
                onClick={this._handleClose}
              >
                <i className="zmdi zmdi-close"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(PasswordUpdate)
