"use strict";
import React, { Component } from "react";

export default class Auth0 extends Component {
  constructor(props) {
    super(props);
    this.state = { idToken: {} };
    this._showLock = this._showLock.bind(this);
  }

  componentWillMount() {
    this._createLock();
    this.setState({ idToken: this._getIdToken()});
  }

  _createLock() {
    this.lock = new Auth0Lock("yMLdR2C9Ojx2GlXs59oFHV9RLDezDmPJ", "fitbird.eu.auth0.com");
  }

  _getIdToken() {
    let idToken = localStorage.getItem("userToken");
    let authHash = this.lock.parseHash(window.location.hash);

    if (!idToken && authHash) {
      if (authHash.id_token) {
        idToken = authHash.id_token;
        localStorage.setItem("userToken", authHash.id_token);
      }
      if (authHash.error) {
        console.error(authHash);
        return null;
      }
    }
    return idToken;
  }

  _showLock() {
    this.lock.show();
  }

  render() {
    return (
      <div className="login-box">
        <a onClick={this._showLock}>Login</a>
      </div>
    );
  }
}
