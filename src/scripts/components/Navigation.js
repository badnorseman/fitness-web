"use strict";
import React, { Component, PropTypes } from "react";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this._goToAccount = this._goToAccount.bind(this);
    this._goToDashboard = this._goToDashboard.bind(this);
    this._goToAuthenticate = this._goToAuthenticate.bind(this);
    this._goToSignup = this._goToSignup.bind(this);
    this._handleLogout = this._handleLogout.bind(this);
  }

  _goToAccount() {
    this.props.changeRoute("ACCOUNT");
  }

  _goToDashboard() {
    this.props.changeRoute("DASHBOARD");
  }

  _goToAuthenticate() {
    this.props.changeRoute("AUTHENTICATE");
  }

  _goToSignup() {
    this.props.changeRoute("SIGNUP");
  }

  _handleLogout() {
    this.props.logout();
  }

  render() {
    const { currentUser } = this.props;
    const { avatar, coach, email, id, name } = currentUser;
    const isLoggedIn = currentUser.id > 0;

    return (
      <div>
        <nav className="mdl-navigation">
          {!isLoggedIn && <div className="mdl-layout--large-screen-only"><a className="mdl-navigation__link" href="#!" onClick={this._goToAuthenticate}>Log in</a></div>}
          {!isLoggedIn && <div className="mdl-layout--large-screen-only"><a className="mdl-navigation__link" href="#!" onClick={this._goToSignup}>Sign up</a></div>}
          {coach && <div className="mdl-layout--large-screen-only"><a className="mdl-navigation__link" href="#!" onClick={this._goToDashboard}>Dashboard</a></div>}
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
              <li className="mdl-menu__item" onClick={this._handleLogout}>Log out</li>
            </ul>
          </div>}
          {!isLoggedIn && <div className="mdl-layout--small-screen-only"><a className="mdl-navigation__link" href="#!" onClick={this._goToAuthenticate}><i className="material-icons">lock_open</i></a></div>}
          {coach && <div className="mdl-layout--small-screen-only"><a className="mdl-navigation__link" href="#!" onClick={this._goToDashboard}><i className="material-icons">dashboard</i></a></div>}
          {isLoggedIn && <div className="mdl-layout--small-screen-only"><a className="mdl-navigation__link" href="#!" onClick={this._goToAccount}><i className="material-icons">account_circle</i></a></div>}
          {isLoggedIn && <div className="mdl-layout--small-screen-only"><a className="mdl-navigation__link" href="#!" onClick={this._handleLogout}><i className="material-icons">lock</i></a></div>}
        </nav>
      </div>
    )
  }
}
