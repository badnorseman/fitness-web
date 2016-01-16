"use strict";
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { goTo } from "../../actions/router_actions";
import { createPassword } from "../../actions/auth_actions";
import InputField from "../InputField";
import Link from "../Link";
import "./login.css";

class NewPassword extends Component {
  constructor(props) {
    super(props);
    this._handleClose = this._handleClose.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleClose() {
    this.props.dispatch(goTo("MARKETPLACE"));
  }

  _handleSubmit(ev) {
    ev.preventDefault();

    let email = this.refs.email.state.fieldValue;

    if (email) {
      this.props.dispatch(createPassword({
        email: email
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
                    fieldId="email"
                    fieldName="Email"
                    fieldType="text"
                    styles="login-card__input-field"
                    ref="email" />
                </div>
                <button
                  className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent login-card__login-button"
                  onClick={this._handleSubmit}
                >
                  SEND
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

export default connect()(NewPassword)
