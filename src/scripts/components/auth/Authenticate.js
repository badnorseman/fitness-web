"use strict";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/routeActions";
import Button from "../Button";
import Facebook from "./Facebook";
import Google from "./Google";
import InputField from "../InputField";
import "./Authenticate.css";

class Authenticate extends Component {
  constructor(props) {
    super(props);
    this._handleClose = this._handleClose.bind(this);
    this._goToSignup = this._goToSignup.bind(this);
    this._goToLogin = this._goToLogin.bind(this);
    this._documentClickHandler = this._documentClickHandler.bind(this);
    this._handleClick = this._handleClick.bind(this);
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
  _handleGoBack() {
      this.props.dispatch(changeRoute("GOBACK"));
  }
  _goToSignup() {
      this.props.dispatch(changeRoute("SIGNUP"));
  }
  _goToLogin() {
      this.props.dispatch(changeRoute("LOGIN"));
  }

  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <div className="login auth--full-screen-phone mdl-card mdl-shadow--2dp" onClick={this._handleClick}>
            <div className="mdl-cell--hide-phone">
              <Button name="Log In or Sign Up" disabled={true} className="back-button disabled--color-black" type="button" onClick={this._handleClose} />
            </div>
            <div className="mdl-cell--hide-tablet mdl-cell--hide-desktop">
              <Button name=" Log In or Sign Up" icon={<i className="material-icons back-button__icon">arrow_back</i>} className="back-button mdl-button--raised mdl-button--primary" type="button" onClick={this._handleGoBack} />
            </div>
            <div className="mdl-card__supporting-text mdl-card--border">
              <div><Facebook /></div>
              <div><Google /></div>
              <div>
                <Button name="SIGN UP" className="mdl-shadow--2dp mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone" onClick={this._goToSignup} type="button" />
                <Button name="LOG IN" className="mdl-shadow--2dp mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone" onClick={this._goToLogin} type="button" />
              </div>
              Disclaimer text: by signing up you accept FitBird’s politics of refunds, confidentiality, etc.
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Authenticate);
