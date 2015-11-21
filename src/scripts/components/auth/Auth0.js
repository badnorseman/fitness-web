"use strict";
import React, { Component } from "react";
// import Auth0Lock from "auth0-lock";
import { connect } from "react-redux";
import { auth0 } from "../../actions/authActions";
import Auth0Variables from "../../constants/auth0Variables";

class Auth0 extends Component {
  constructor(props) {
    super(props);
    this._showLock = this._showLock.bind(this);
  }

  componentWillMount() {
    this._initializeLock();
  }

  _initializeLock() {
    this.lock = new Auth0Lock(
      Auth0Variables.AUTH0_CLIENT_ID,
      Auth0Variables.AUTH0_DOMAIN
    );
  }

  _showLock(event) {
    event.preventDefault();

    this.lock.show({
      disableSignupAction: true,
      disableResetAction: true
    }, (error, profile, token) => {
      this.props.dispatch(auth0(error, profile, token));
    });
  }

  render() {
    return (
      <a onClick={this._showLock}>
        Login
      </a>
    );
  }
}

export default connect()(Auth0);
