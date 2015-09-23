"use strict";
import React, { Component } from "react";
import Account from "../containers/Account";
import Cart from "../components/products/Cart";
import ErrorMessage from "../components/ErrorMessage";
import Footer from "../components/Footer";
import Login from "../components/auth/Login";
import Products from "../containers/products";
import Signup from "../components/auth/Signup";
import "./layout.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this._handleClose = this._handleClose.bind(this);
    this._handleLogin = this._handleLogin.bind(this);
    this._handleLogout = this._handleLogout.bind(this);
    this._handleSignup = this._handleSignup.bind(this);
    this._linkToAccount = this._linkToAccount.bind(this);
    this._linkToCart = this._linkToCart.bind(this);
    this._linkToLogin = this._linkToLogin.bind(this);
    this._linkToProducts = this._linkToProducts.bind(this);
    this._linkToSignup = this._linkToSignup.bind(this);
  }

  componentDidUpdate() {
    componentHandler.upgradeDom()
  }

  _getAccount() {
    return (
      <Account />
    );
  }

  _getCart() {
    return (
      <Cart />
    );
  }

  _getLogin() {
    return (
      <Login
      onClose={this._handleClose}
      onLogin={this._handleLogin} />
    );
  }

  _getProducts() {
    return (
      <Products />
    );
  }

  _getSignup() {
    return (
      <Signup
      onClose={this._handleClose}
      onSignup={this._handleSignup} />
    );
  }

  _handleClose() {
    this.props.changeRoute("PRODUCTS");
  }

  _handleLogin(auth) {
    this.props.login(auth);
  }

  _handleLogout() {
    this.props.logout();
  }

  _handleSignup(auth) {
    this.props.signup(auth);
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

  _linkToProducts() {
    this.props.changeRoute("PRODUCTS");
  }

  _linkToSignup() {
    this.props.changeRoute("SIGNUP");
  }

  render() {
    const { currentUser, errorMessage, isLoggedIn, route } = this.props;
    const { avatar, email, name } = currentUser;

    let content;
    switch (route) {
      case "ACCOUNT":
        content = this._getAccount();
        break;
      case "CART":
        content = this._getCart();
        break;
      case "LOGIN":
        content = this._getLogin();
        break;
      case "SIGNUP":
        content = this._getSignup();
        break;
      default:
        content = this._getProducts();
    }
    return (
      <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header className="mdl-layout__header layout__header">
            <div className="mdl-layout__header-row">
              <span className="mdl-layout-title">
                <a className="mdl-navigation__link" href="#" onClick={this._linkToProducts}>FitBird</a>
              </span>
              <div className="mdl-layout-spacer"></div>
              <nav className="mdl-navigation">
                {!isLoggedIn && <a className="mdl-navigation__link" href="#" onClick={this._linkToLogin}>Log In</a>}
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
          </header>
          <main className="mdl-layout__content">
            <ErrorMessage errorMessage={errorMessage} />
            <div className="page-content">
              {content}
            </div>
            <div className="mdl-layout-spacer"></div>
            <Footer className="layout__footer" />
          </main>
        </div>
      </div>
    )
  }
}
