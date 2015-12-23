"use strict";
import React, { Component } from "react";
import { render } from "react-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeRoute } from "../actions/router_actions";
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
    FB.getLoginStatus(response => {
      if (response.status === "connected") {
        FB.logout();
      };
    });
    this.props.logout();
  }

  render() {
    const { avatar, coach, email, id, name } = this.props.currentUser;
    const isLoggedIn = (id) ? true : false;

    return (
      <div>
        <nav className="mdl-navigation">
          {!isLoggedIn && <div className="mdl-layout--large-screen-only">
            <Link name="Login" onClick={this._goToLogin} />
          </div>}
          {!isLoggedIn && <div className="mdl-layout--large-screen-only">
            <Link name="Sign up" onClick={this._goToSignup} />
          </div>}
          {coach && <div className="mdl-layout--large-screen-only">
            <Link name="Dashboard" onClick={this._goToDashboard} />
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
              <li className="mdl-menu__item" onClick={this._goToAccount}>Account</li>
              <li className="mdl-menu__item" onClick={this._handleLogout}>Log out</li>
            </ul>
          </div>}
          {!isLoggedIn && <div className="mdl-layout--small-screen-only">
            <IconLink name="lock_open" onClick={this._goToLogin} />
          </div>}
          {!isLoggedIn && <div className="mdl-layout--small-screen-only">
            <IconLink name="mood" onClick={this._goToSignup} />
          </div>}
          {coach && <div className="mdl-layout--small-screen-only">
            <IconLink name="dashboard" onClick={this._goToDashboard} />
          </div>}
          {isLoggedIn && <div className="mdl-layout--small-screen-only">
            <IconLink name="account_circle" onClick={this._goToAccount} />
          </div>}
          {isLoggedIn && <div className="mdl-layout--small-screen-only">
            <IconLink name="lock" onClick={this._handleLogout} />
          </div>}
        </nav>
      </div>
    )
  }
}

const Link = ({
  name,
  onClick
}) => (
  <a href="#!" className="mdl-navigation__link"
    onClick={ev => {
      ev.preventDefault();
      onClick();
    }}
  >
    {name}
  </a>
);

const IconLink = ({
  name,
  onClick
}) => (
  <a href="#!" className="mdl-navigation__link"
    onClick={ev => {
      ev.preventDefault();
      onClick();
    }}
  >
    <i className="material-icons">{name}</i>
  </a>
);

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeRoute,
    logout
  }, dispatch);
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
