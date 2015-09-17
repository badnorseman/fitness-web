"use strict";
import React, { Component } from "react";
import Cart from "../components/products/Cart";
import ErrorMessage from "../components/ErrorMessage";
import Footer from "../components/Footer";
import Link from "../components/Link";
import Login from "../components/auth/Login";
import Products from "../containers/products";
import Signup from "../components/auth/Signup";
import Transactions from "../containers/Transactions";

export default class App extends Component {
  constructor(props) {
    super(props);
    this._handleClose = this._handleClose.bind(this);
    this._handleLogin = this._handleLogin.bind(this);
    this._handleLogout = this._handleLogout.bind(this);
    this._handleSignup = this._handleSignup.bind(this);
    this._linkToCart = this._linkToCart.bind(this);
    this._linkToLogin = this._linkToLogin.bind(this);
    this._linkToProducts = this._linkToProducts.bind(this);
    this._linkToSignup = this._linkToSignup.bind(this);
    this._linkToTransactions = this._linkToTransactions.bind(this);
  }

  componentDidUpdate() {
    componentHandler.upgradeDom()
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

  _getTransactions() {
    return (
      <Transactions />
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

  _linkToTransactions() {
    this.props.changeRoute("TRANSACTIONS");
  }

  render() {
    const { errorMessage, isLoggedIn, route, user } = this.props;

    let content;
    switch (route) {
      case "LOGIN":
        content = this._getLogin();
        break;
      case "SIGNUP":
        content = this._getSignup();
        break;
      case "TRANSACTIONS":
        content = this._getTransactions();
        break;
      case "CART":
        content = this._getCart();
        break;
      default:
        content = this._getProducts();
    }
    return (
      <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--overlay-drawer-button">
          <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
              <span className="mdl-layout-title">
                <a className="mdl-navigation__link" href="#" onClick={this._linkToProducts}>FitBird</a>
              </span>
              <div className="mdl-layout-spacer"></div>
              <nav className="mdl-navigation">
                {isLoggedIn && <Link name="Log out" onClick={this._handleLogout} />}
                {!isLoggedIn && <Link name="Log in" onClick={this._linkToLogin} />}
                {!isLoggedIn && <Link name="Sign up" onClick={this._linkToSignup} />}
              </nav>
            </div>
          </header>
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">FitBird</span>
            <nav className="mdl-navigation">
              {isLoggedIn && <Link name="Log out" onClick={this._handleLogout} />}
              {!isLoggedIn && <Link name="Log in" onClick={this._linkToLogin} />}
              {!isLoggedIn && <Link name="Sign up" onClick={this._linkToSignup} />}
              {isLoggedIn && <Link name="Transactions" onClick={this._linkToTransactions} />}
              {isLoggedIn && <Link name="Cart" onClick={this._linkToCart} />}
            </nav>
          </div>
          <main className="mdl-layout__content">
            <ErrorMessage errorMessage={errorMessage} />
            <div className="page-content">
              {content}
            </div>
            <div className="mdl-layout-spacer"></div>
            <Footer className="footer" />
          </main>
        </div>
      </div>
    )
  }
}
