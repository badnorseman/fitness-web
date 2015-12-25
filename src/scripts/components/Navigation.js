"use strict";
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth_actions";
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
            <Link styles="mdl-navigation__link" route="LOGIN">
              <i className="material-icons">lock_open</i>
            </Link>
          </div>}
          {!isLoggedIn && <div className="mdl-layout--small-screen-only">
            <Link styles="mdl-navigation__link" route="SIGNUP">
              <i className="material-icons">mood</i>
            </Link>
          </div>}
          {coach && <div className="mdl-layout--small-screen-only">
            <Link styles="mdl-navigation__link" route="DASHBOARD">
              <i className="material-icons">dashboard</i>
            </Link>
          </div>}
          {isLoggedIn && <div className="mdl-layout--small-screen-only">
            <Link styles="mdl-navigation__link" route="ACCOUNT">
              <i className="material-icons">account_circle</i>
            </Link>
          </div>}
          {isLoggedIn && <div className="mdl-layout--small-screen-only">
            <a href="#!"
              className="mdl-navigation__link"
              onClick={ev => {
                ev.preventDefault();
                this._handleLogout;
              }}
            >
              <i className="material-icons">lock</i>
            </a>
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
