"use strict";
import React, { Component, PropTypes } from "react";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this._handleLogout = this._handleLogout.bind(this);
    this._linkToAccount = this._linkToAccount.bind(this);
    this._linkToCart = this._linkToCart.bind(this);
    this._linkToLogin = this._linkToLogin.bind(this);
    this._linkToSignup = this._linkToSignup.bind(this);
  }

  _handleLogout() {
    this.props.logout();
  }

  _linkToAccount() {
    this.props.changeRoute("ACCOUNT");
  }

  _linkToCart() {
    this.props.changeRoute("CART");
  }

  _linkToLogin() {
    this.props.changeRoute("LOGIN");
  }

  _linkToSignup() {
    this.props.changeRoute("SIGNUP");
  }

  render() {
    const { currentUser, isLoggedIn } = this.props;
    const { avatar, email, name } = currentUser;

    return (
      <div className="mdl-layout--large-screen-only">
        <nav className="mdl-navigation">
          {!isLoggedIn && <a className="mdl-navigation__link" href="#" onClick={this._linkToLogin}>Log In</a>}
          {!isLoggedIn && <a className="mdl-navigation__link" href="#" onClick={this._linkToSignup}>Sign Up</a>}
          <a className="mdl-navigation__link" href="#" onClick={this._linkToCart}>Cart</a>
          {isLoggedIn && <div>
            <button
              id="account-menu"
              className="mdl-button mdl-js-button mdl-button--icon">
              <img className="layout__header-avatar" src={avatar} alt="" />
            </button>
            <ul
              className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
              htmlFor="account-menu">
              <li className="mdl-menu__item" onClick={this._linkToAccount}>Account</li>
              <li className="mdl-menu__item" onClick={this._handleLogout}>Log Out</li>
            </ul>
          </div>}
        </nav>
      </div>
    )
  }
}
