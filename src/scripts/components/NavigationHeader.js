"use strict";
import React, { Component, PropTypes } from "react";
import Link from "./Link";

export default class NavigationHeader extends Component {
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

    return (
      <div className="mdl-layout--large-screen-only">
        <nav className="mdl-navigation">
          {!isLoggedIn && <Link name="Log In" onClick={this._linkToLogin} />}
          {!isLoggedIn && <Link name="Sign Up" onClick={this._linkToSignup} />}
          {isLoggedIn && <Account
            currentUser={currentUser}
            onLinkToAccount={this._linkToAccount}
            onLogout={this._handleLogout} />}
          {isLoggedIn && <Cart
            onLinkToCart={this._linkToCart} />}
        </nav>
      </div>
    )
  }
}

class Account extends Component {
  constructor(props) {
    super(props);
    this._handleLogout = this._handleLogout.bind(this);
    this._linkToAccount = this._linkToAccount.bind(this);
  }

  _handleLogout() {
    this.props.onLogout();
  }

  _linkToAccount() {
    this.props.onLinkToAccount();
  }

  render() {
    const { avatar } = this.props.currentUser;
    const avatarStyle = {
      borderRadius:50,
      height:32,
      width:32
    }

    return (
      <div>
        <button
          id="account-menu"
          className="mdl-button mdl-js-button mdl-button--icon">
          <img src={avatar} style={avatarStyle} alt="" />
        </button>
        <ul
          className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
          htmlFor="account-menu">
          <li className="mdl-menu__item" onClick={this._linkToAccount}>Account</li>
          <li className="mdl-menu__item" onClick={this._handleLogout}>Log Out</li>
        </ul>
      </div>
    )
  }
}

class Cart extends Component {
  constructor(props) {
    super(props);
    this._linkToCart = this._linkToCart.bind(this);
  }

  _linkToCart() {
    this.props.onLinkToCart();
  }

  render() {
    return (
      <div>
        <button
          className="mdl-button mdl-js-button mdl-button--icon"
          onClick={this._linkToCart}>
          <i className="material-icons">shopping_cart</i>
        </button>
      </div>
    )
  }
}
