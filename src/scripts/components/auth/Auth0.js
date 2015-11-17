"use strict";
import React, { Component } from "react";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/routeActions";
import { oauth } from "../../actions/authActions";

class Auth0 extends Component {
  constructor(props) {
    super(props);
    this.showLock = this.showLock.bind(this);
  }

  componentWillMount() {
    this.lock = new Auth0Lock("yMLdR2C9Ojx2GlXs59oFHV9RLDezDmPJ", "fitbird.eu.auth0.com");
  }

  showLock() {
    this.lock.show();
  }

  render() {
    return (
      <div className="login-box">
        <a onClick={this.showLock}>Login</a>
      </div>
    );
  }
}

export default connect()(Auth0);
