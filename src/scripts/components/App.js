"use strict";
import React, { Component } from "react";
import Account from "../containers/Account";
import Dashboard from "../containers/Dashboard";
import ErrorMessage from "../containers/ErrorMessage";
import Footer from "../components/Footer";
import Login from "../components/auth/Login";
import Marketplace from "../containers/Marketplace";
import Navigation from "../containers/Navigation";
import Signup from "../components/auth/Signup";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this._handleClose = this._handleClose.bind(this);
    this._linkToMarketplace = this._linkToMarketplace.bind(this);
  }

  componentDidUpdate() {
    componentHandler.upgradeDom()
  }

  _getAccount() {
    return (
      <Account />
    );
  }

  _getDashboard() {
    return (
      <Dashboard />
    );
  }

  _getLogin() {
    return (
      <Login
      onClose={this._handleClose} />
    );
  }

  _getMarketplace() {
    return (
      <Marketplace />
    );
  }

  _getSignup() {
    return (
      <Signup
      onClose={this._handleClose} />
    );
  }

  _handleClose() {
    this.props.changeRoute("MARKETPLACE");
  }

  _linkToMarketplace() {
    this.props.changeRoute("MARKETPLACE");
  }

  render() {
    const { route } = this.props;

    let content;
    switch (route) {
      case "ACCOUNT":
        content = this._getAccount();
        break;
      case "DASHBOARD":
        content = this._getDashboard();
        break;
      case "LOGIN":
        content = this._getLogin();
        break;
      case "SIGNUP":
        content = this._getSignup();
        break;
      default:
        content = this._getMarketplace();
    }
    return (
      <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header className="mdl-layout__header layout__header">
            <div className="mdl-layout__header-row">
              <span className="mdl-layout-title">
                <a className="mdl-navigation__link" href="#!" onClick={this._linkToMarketplace}>FitBird</a>
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
