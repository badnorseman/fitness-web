"use strict";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { changeRoute } from "../actions/route_actions";
import { logout } from "../actions/auth_actions";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this._goToAccount = this._goToAccount.bind(this);
    this._goToDashboard = this._goToDashboard.bind(this);
    this._goToLogin = this._goToLogin.bind(this);
    this._goToSignup = this._goToSignup.bind(this);
    this._handleLogout = this._handleLogout.bind(this);
  }

  _goToAccount() {
    this.props.dispatch(changeRoute("ACCOUNT"));
  }

  _goToDashboard() {
    this.props.dispatch(changeRoute("DASHBOARD"));
  }

  _goToLogin() {
    this.props.dispatch(changeRoute("LOGIN"));
  }

  _goToSignup() {
    this.props.dispatch(changeRoute("SIGNUP"));
  }

  _handleLogout() {
    FB.getLoginStatus(response => {
      if (response.status === "connected") {
        FB.logout();
      };
    });
    this.props.dispatch(logout());
  }

  render() {
    const { currentUser } = this.props;
    const { avatar, coach, email, id, name } = currentUser;
    const isLoggedIn = (id) ? true : false;

    return (
      <div>
        <nav className="mdl-navigation">
          {!isLoggedIn && <div className="mdl-layout--large-screen-only"><a className="mdl-navigation__link" href="#!" onClick={this._goToLogin}>Log in</a></div>}
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
          {!isLoggedIn && <div className="mdl-layout--small-screen-only"><a className="mdl-navigation__link" href="#!" onClick={this._goToLogin}><i className="material-icons">lock_open</i></a></div>}
          {!isLoggedIn && <div className="mdl-layout--small-screen-only"><a className="mdl-navigation__link" href="#!" onClick={this._goToSignup}><i className="material-icons">mood</i></a></div>}
          {coach && <div className="mdl-layout--small-screen-only"><a className="mdl-navigation__link" href="#!" onClick={this._goToDashboard}><i className="material-icons">dashboard</i></a></div>}
          {isLoggedIn && <div className="mdl-layout--small-screen-only"><a className="mdl-navigation__link" href="#!" onClick={this._goToAccount}><i className="material-icons">account_circle</i></a></div>}
          {isLoggedIn && <div className="mdl-layout--small-screen-only"><a className="mdl-navigation__link" href="#!" onClick={this._handleLogout}><i className="material-icons">lock</i></a></div>}
        </nav>
      </div>
    )
  }
}

export default connect()(Navigation);
