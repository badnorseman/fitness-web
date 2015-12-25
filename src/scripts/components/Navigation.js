"use strict";
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth_actions";
import IconLink from "./IconLink";
import Link from "./Link";

class Navigation extends Component {
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
            <Link styles="mdl-navigation__link" route="LOGIN">
              Login
            </Link>
          </div>}
          {!isLoggedIn && <div className="mdl-layout--large-screen-only">
            <Link styles="mdl-navigation__link" route="SIGNUP">
              Sign up
            </Link>
          </div>}
          {coach && <div className="mdl-layout--large-screen-only">
            <Link styles="mdl-navigation__link" route="DASHBOARD">
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
                <Link styles="mdl-menu__item" route="ACCOUNT">
                  Account
                </Link>
              </li>
              <li className="mdl-menu__item" onClick={this._handleLogout}>Log out</li>
            </ul>
          </div>}
          {!isLoggedIn && <div className="mdl-layout--small-screen-only">
            <IconLink name="lock_open" route="LOGIN" />
          </div>}
          {!isLoggedIn && <div className="mdl-layout--small-screen-only">
            <IconLink name="mood" route="SIGNUP" />
          </div>}
          {coach && <div className="mdl-layout--small-screen-only">
            <IconLink name="dashboard" route="DASHBOARD" />
          </div>}
          {isLoggedIn && <div className="mdl-layout--small-screen-only">
            <IconLink name="account_circle" route="ACCOUNT" />
          </div>}
          {isLoggedIn && <div className="mdl-layout--small-screen-only">
            <IconLink name="lock" onClick={this._handleLogout} />
          </div>}
        </nav>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
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
