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
    this._goToSignup = this._goToSignup.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._documentClickHandler = this._documentClickHandler.bind(this);
    this._handleGoBack = this._handleGoBack.bind(this);
  }
  componentDidMount() {
    document.addEventListener("click", this._documentClickHandler);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this._documentClickHandler);
  }
  _documentClickHandler() {
    this._handleClose();
  }
  _handleClick(e) {
     e.nativeEvent.stopImmediatePropagation();
  }
  _handleClose() {
    this.props.dispatch(changeRoute("MARKETPLACE"));
  }
  _goToSignup() {
    this.props.dispatch(changeRoute("SIGNUP"));
  }
  _handleGoBack() {
      this.props.dispatch(changeRoute("GOBACK"));
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
          <div className="login auth--full-screen-phone mdl-card mdl-shadow--2dp" onClick={this._handleClick}>
            <div className="mdl-cell--hide-phone">
              <Button className="mdl-button--icon modal__close-button" icon={<i className="material-icons">close</i>} type="button" onClick={this._handleClose} />
              <h5 className="modal__title">Log in</h5>
            </div>
            <div className="mdl-cell--hide-tablet mdl-cell--hide-desktop">
              <Button name=" Log In" icon={<i className="material-icons back-button__icon">arrow_back</i>} className="back-button mdl-button--raised mdl-button--primary" type="button" onClick={this._handleGoBack} />
            </div>
            <div className="mdl-cell mdl-cell--12-col"><Facebook /></div>
            <div className="mdl-cell mdl-cell--12-col"><Google /></div>
            <div className="mdl-cell mdl-cell--12-col mdl-card--border ">
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
                <Button name="Forgot password ?" className="mdl-button--accent login__forget-password " onClick={this._goToSignup} type="button" />
                <div>
                  <Button name="Log in" className="mdl-cell mdl-cell--12-col mdl-button--raised mdl-button--accent" type="submit" />
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
