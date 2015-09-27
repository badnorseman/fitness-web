"use strict";
import React, { Component, PropTypes } from "react";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this._goToAccount = this._goToAccount.bind(this);
    this._goToDashboard = this._goToDashboard.bind(this);
    this._goToLogin = this._goToLogin.bind(this);
    this._goToSignup = this._goToSignup.bind(this);
    this._handleLogout = this._handleLogout.bind(this);
  }

  _goToAccount() {
    this.props.changeRoute("ACCOUNT");
  }

  _goToDashboard() {
    this.props.changeRoute("DASHBOARD");
  }

  _goToLogin() {
    this.props.changeRoute("LOGIN");
  }

  _goToSignup() {
    this.props.changeRoute("SIGNUP");
  }

  _handleLogout() {
    this.props.logout();
  }

  render() {
    const { currentUser, isLoggedIn } = this.props;
    const { avatar, email, name } = currentUser;

    return (
      <div>
        <nav className="mdl-navigation">
          {!isLoggedIn && <div className="mdl-layout--large-screen-only"><a className="mdl-navigation__link" href="#!" onClick={this._goToLogin}>Log In</a></div>}
          {isLoggedIn && <div className="mdl-layout--large-screen-only"><a className="mdl-navigation__link" href="#!" onClick={this._goToDashboard}>Dashboard</a></div>}
          {isLoggedIn && <div className="mdl-layout--large-screen-only">
            <button
              id="account-menu"
              className="mdl-button mdl-js-button mdl-button--icon">
              <img className="layout__header-avatar" src={avatar} alt="" />
            </button>
            <ul
              className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
              htmlFor="account-menu">
              <li className="mdl-menu__item" onClick={this._goToAccount}>Account</li>
              <li className="mdl-menu__item" onClick={this._handleLogout}>Log Out</li>
            </ul>
          </div>}
          {!isLoggedIn && <div className="mdl-layout--small-screen-only"><a className="mdl-navigation__link" href="#!" onClick={this._goToLogin}><i className="material-icons">lock_open</i></a></div>}
          {isLoggedIn && <div className="mdl-layout--small-screen-only"><a className="mdl-navigation__link" href="#!" onClick={this._goToDashboard}><i className="material-icons">dashboard</i></a></div>}
          {isLoggedIn && <div className="mdl-layout--small-screen-only"><a className="mdl-navigation__link" href="#!" onClick={this._goToAccount}><i className="material-icons">account_circle</i></a></div>}
          {isLoggedIn && <div className="mdl-layout--small-screen-only"><a className="mdl-navigation__link" href="#!" onClick={this._handleLogout}><i className="material-icons">lock_outline</i></a></div>}
        </nav>
      </div>
    )
  }
}
