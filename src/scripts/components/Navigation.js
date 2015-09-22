"use strict";
import React, { Component, PropTypes } from "react";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this._handleLogout = this._handleLogout.bind(this);
    this._linkToAccount = this._linkToAccount.bind(this);
    this._linkToCart = this._linkToCart.bind(this);
    this._linkToLogin = this._linkToLogin.bind(this);
    this._linkToProducts = this._linkToProducts.bind(this);
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

  _linkToProducts() {
    this.props.onLinkToProducts();
  }

  _linkToSignup() {
    this.props.onLinkToSignup();
  }

  render() {
    const { currentUser, isLoggedIn } = this.props;

    return (
      <div>
      </div>
    )
  }
}
