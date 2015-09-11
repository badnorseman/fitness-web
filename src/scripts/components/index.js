"use strict";
import React, { Component } from "react";
import ErrorMessage from "../components/ErrorMessage";
import Footer from "../components/Footer";
import Link from "../components/Link";
import Login from "../components/auth/Login";
import Products from "../containers/products";
import Signup from "../components/auth/Signup";
import TransactionList from "../containers/TransactionList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this._handleClose = this._handleClose.bind(this);
    this._handleLogin = this._handleLogin.bind(this);
    this._handleLogout = this._handleLogout.bind(this);
    this._handleSignup = this._handleSignup.bind(this);
    this._linkToLogin = this._linkToLogin.bind(this);
    this._linkToProducts = this._linkToProducts.bind(this);
    this._linkToSignup = this._linkToSignup.bind(this);
    this._linkToTransactions = this._linkToTransactions.bind(this);
  }

  componentDidUpdate() {
    componentHandler.upgradeDom()
  }

  _getLogin(errors) {
    return (
      <Login
      errors={errors}
      onClose={this._handleClose}
      onLogin={this._handleLogin} />
    );
  }

  _getProducts() {
    return (
      <Products />
    );
  }

  _getSignup(errors) {
    return (
      <Signup
      errors={errors}
      onClose={this._handleClose}
      onSignup={this._handleSignup} />
    );
  }

  _getTransactions() {
    return (
      <TransactionList />
    );
  }

  _handleClose() {
    this.props.resetError();
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
    const { errorMessages, errors, isLoggedIn, route, user } = this.props;

    let content;
    switch (route) {
      case "LOGIN":
        content = this._getLogin(errors);
        break;
      case "SIGNUP":
        content = this._getSignup(errors);
        break;
      case "TRANSACTIONS":
        content = this._getTransactions();
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
            </nav>
          </div>
          <main className="mdl-layout__content">
            {errorMessages}
            {errors}
            <div className="page-content">
              {content}
            </div>
            <div className="mdl-layout-spacer"></div>
            <Footer />
          </main>
        </div>
      </div>
    )
  }
}
