"use strict";
import React, { Component } from "react";
// import Auth0Lock from "auth0-lock";
import Auth0Variables from "../../constants/auth0Variables";

export default class Auth0 extends Component {
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

  _showLock() {
    this.lock.show((error, profile, id_token) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log(profile);
      if (id_token) {
        this._setIdToken(id_token);
      }
    });
  }

  _setIdToken(id_token) {
    localStorage.setItem("idToken", id_token);
  }

  render() {
    return (
      <div className="login-box">
        <a onClick={this._showLock}>Login</a>
      </div>
    );
  }
}
