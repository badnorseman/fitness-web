"use strict";
import React, { Component, PropTypes } from "react";

export default class AccountMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button
          id="account-menu"
          className="mdl-button mdl-js-button mdl-button--icon">
          <i className="material-icons">account_circle</i>
        </button>
        <ul
          className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
          htmlFor="account-menu">
          <li>Account</li>
          <li>Log Out</li>
        </ul>
      </div>
    )
  }
}
