"use strict";
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { changeRoute } from "../actions/router_actions";
import { logout } from "../actions/auth_actions";
import Link from "./Link";

class Navigation extends Component {
  _goToAccount = () => {
    this.props.changeRoute("ACCOUNT");
  };

  _goToDashboard = () => {
    this.props.changeRoute("DASHBOARD");
  };

  _goToLogin = () => {
    this.props.changeRoute("LOGIN");
  };

  _goToSignup = () => {
    this.props.changeRoute("SIGNUP");
  };

  _handleLogout = () => {
    FB.getLoginStatus(response => {
      if (response.status === "connected") {
        FB.logout();
      };
    });
    this.props.logout();
  };

  render() {
    const { avatar, coach, email, id, name } = this.props.currentUser;
    const isLoggedIn = (id) ? true : false;

    return (
      <div>
        <nav className="mdl-navigation">
          {!isLoggedIn && <div className="mdl-layout--large-screen-only">
            <Link styles="mdl-navigation__link" onClick={this._goToLogin}>
              Login
            </Link>
          </div>}
          {!isLoggedIn && <div className="mdl-layout--large-screen-only">
            <Link styles="mdl-navigation__link" onClick={this._goToSignup}>
              Sign up
            </Link>
          </div>}
          {coach && <div className="mdl-layout--large-screen-only">
            <Link styles="mdl-navigation__link" onClick={this._goToDashboard}>
              Dashboard
            </Link>
          </div>}
          {isLoggedIn && <div className="mdl-layout--large-screen-only">
            <button
              id="account-menu"
              className="mdl-button mdl-js-button mdl-button--icon">
              <img className="layout__header-avatar" src={avatar} alt="" />
            </button>
            <ul
              className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
              htmlFor="account-menu">
              <li>
                <Link styles="mdl-menu__item" onClick={this._goToAccount}>
                  Account
                </Link>
              </li>
              <li className="mdl-menu__item" onClick={this._handleLogout}>Log out</li>
            </ul>
          </div>}
          {!isLoggedIn && <div className="mdl-layout--small-screen-only">
            <Link styles="mdl-navigation__link" onClick={this._goToLogin}>
              <i className="material-icons">lock_open</i>
            </Link>
          </div>}
          {!isLoggedIn && <div className="mdl-layout--small-screen-only">
            <Link styles="mdl-navigation__link" onClick={this._goToSignup}>
              <i className="material-icons">mood</i>
            </Link>
          </div>}
          {coach && <div className="mdl-layout--small-screen-only">
            <Link styles="mdl-navigation__link" onClick={this._goToDashboard}>
              <i className="material-icons">dashboard</i>
            </Link>
          </div>}
          {isLoggedIn && <div className="mdl-layout--small-screen-only">
            <Link styles="mdl-navigation__link" onClick={this._goToAccount}>
              <i className="material-icons">account_circle</i>
            </Link>
          </div>}
          {isLoggedIn && <div className="mdl-layout--small-screen-only">
            <Link styles="mdl-navigation__link" onClick={this._handleLogout}>
              <i className="material-icons">lock</i>
            </Link>
          </div>}
        </nav>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeRoute: (route) => {
      dispatch(changeRoute(route));
    },
    logout: () => {
      dispatch(logout);
    }
  };
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)
