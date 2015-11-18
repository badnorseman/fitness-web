"use strict";
import React, { Component } from "react";

export default class Auth0 extends Component {
  constructor(props) {
    super(props);
    this.showLock = this.showLock.bind(this);
  }

  showLock() {
    this.props.lock.show();
  }

  render() {
    return (
      <div className="login-box">
        <a onClick={this.showLock}>Login</a>
      </div>
    );
  }
}
