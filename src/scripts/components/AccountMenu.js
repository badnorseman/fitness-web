"use strict";
import React, { Component, PropTypes } from "react";
import Link from "../components/Link";

export default class AccountMenu extends Component {
  constructor(props) {
    super(props);
    this._handleLinkToAccount = this._handleLinkToAccount.bind(this);
    this._handleLogout = this._handleLogout.bind(this);
  }

  _handleLinkToAccount() {
    this.props.onLinkToAccount();
  }

  _handleLogout() {
    this.props.onLogout();
  }

  render() {
    const { name } = this.props;

    return (
      <div className="mdl-layout--large-screen-only">
        Hi {name}
        <button
          id="account-menu"
          className="mdl-button mdl-js-button mdl-button--icon">
          <i className="material-icons">arrow_drop_down</i>
        </button>
        <ul
          className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
          htmlFor="account-menu">
          <li className="mdl-menu__item" onClick={this._handleLinkToAccount}>Account</li>
          <li className="mdl-menu__item" onClick={this._handleLogout}>Log Out</li>
        </ul>
      </div>
    )
  }
}
