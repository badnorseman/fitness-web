"use strict";
import React, { Component, PropTypes } from "react";
import Link from "./Link";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this._handleLogout = this._handleLogout.bind(this);
    this._linkToAccount = this._linkToAccount.bind(this);
    this._linkToLogin = this._linkToLogin.bind(this);
    this._linkToSignup = this._linkToSignup.bind(this);
  }

  _handleLogout() {
    this.props.onLogout();
  }

  _linkToAccount() {
    this.props.onLinkToAccount();

  }
  _linkToLogin() {
    this.props.onLinkToLogin();
  }

  _linkToSignup() {
    this.props.onLinkToSignup();
  }

  render() {
    const { currentUser, isLoggedIn } = this.props;
    const { name } = currentUser;

    return (
      <div>
        <nav className="mdl-navigation">
          {!isLoggedIn && <Link name="Log In" onClick={this._linkToLogin} />}
          {!isLoggedIn && <Link name="Sign Up" onClick={this._linkToSignup} />}
          <div className="mdl-layout--large-screen-only">
            {isLoggedIn && <div>
              Hi {name}
              <button
                id="account-menu"
                className="mdl-button mdl-js-button mdl-button--icon">
                <i className="material-icons">arrow_drop_down</i>
              </button>
              <ul
                className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                htmlFor="account-menu">
                <li className="mdl-menu__item" onClick={this._linkToAccount}>Account</li>
                <li className="mdl-menu__item" onClick={this._handleLogout}>Log Out</li>
              </ul>
            </div>}
          </div>
        </nav>
      </div>
    )
  }
}
