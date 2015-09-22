"use strict";
import React, { Component, PropTypes } from "react";
import Link from "./Link";

export default class NavigationDrawer extends Component {
  constructor(props) {
    super(props);
    this._handleLogout = this._handleLogout.bind(this);
    this._linkToAccount = this._linkToAccount.bind(this);
    this._linkToCart = this._linkToCart.bind(this);
    this._linkToLogin = this._linkToLogin.bind(this);
    this._linkToSignup = this._linkToSignup.bind(this);
  }

  _handleLogout() {
    this.props.onLogout();
  }

  _linkToAccount() {
    this.props.onLinkToAccount();
  }

  _linkToCart() {
    this.props.onLinkToCart();
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
          {isLoggedIn && <Link name="Account" onClick={this._linkToAccount} />}
          {isLoggedIn && <Link name="Cart" onClick={this._linkToCart} />}
          {isLoggedIn && <Link name="Log Out" onClick={this._handleLogout} />}
        </nav>
      </div>
    )
  }
}
