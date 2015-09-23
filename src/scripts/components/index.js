"use strict";
import React, { Component } from "react";
import Account from "../containers/Account";
import Cart from "../components/products/Cart";
import ErrorMessage from "../containers/ErrorMessage";
import Footer from "../components/Footer";
import Login from "../containers/auth/Login";
import Navigation from "../containers/Navigation";
import Products from "../containers/Products";
import Signup from "../containers/auth/Signup";
import "./layouts.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this._handleClose = this._handleClose.bind(this);
    this._linkToProducts = this._linkToProducts.bind(this);
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
      onClose={this._handleClose} />
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
      onClose={this._handleClose} />
    );
  }

  _handleClose() {
    this.props.changeRoute("PRODUCTS");
  }

  _linkToProducts() {
    this.props.changeRoute("PRODUCTS");
  }

  render() {
    const { route } = this.props;

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
              <Navigation />
            </div>
          </header>
          <main className="mdl-layout__content">
            <ErrorMessage />
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
