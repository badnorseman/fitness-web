"use strict";
import React, { Component } from "react";

export default class Auth0 extends Component {
  constructor(props) {
    super(props);
    this.showLock = this.showLock.bind(this);
  }

  componentWillMount() {
    this.lock = new Auth0Lock("yMLdR2C9Ojx2GlXs59oFHV9RLDezDmPJ", "fitbird.eu.auth0.com");
  }

  componentWillUnmount() {
    this.lock = {};
  }

  showLock() {
    this.lock.show();
    this.getIdToken();
  }

  getIdToken() {
    let idToken = localStorage.getItem("userToken");
    const authHash = this.lock.parseHash(window.location.hash);

    if (!idToken && authHash) {
      if (authHash.id_token) {
        idToken = authHash.id_token;
        localStorage.setItem("userToken", authHash.id_token);
      }
      if (authHash.error) {
        console.error(authHash);
      }
    }
  }

  render() {
    return (
      <div className="login-box">
        <a onClick={this.showLock}>Login</a>
      </div>
    );
  }
}
