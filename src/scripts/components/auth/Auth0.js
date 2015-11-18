"use strict";
import React, { Component } from "react";

export default class Auth0 extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    this.props.lock.show();
  }

  render() {
    return (
      <div className="login-box">
        <a onClick={this._handleClick}>Login</a>
      </div>
    );
  }
}
