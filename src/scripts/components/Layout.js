"use strict";
import React, { Component } from "react";
import Account from "../containers/Account";
import Dashboard from "../containers/Dashboard";
import EditProduct from "./products/EditProduct";
import ErrorMessage from "../containers/ErrorMessage";
import Footer from "../components/Footer";
import Login from "../components/auth/Login";
import Marketplace from "../containers/Marketplace";
import Navigation from "../containers/Navigation";
import NewProduct from "./products/NewProduct";
import NewTransaction from "../containers/NewTransaction";
import ShowProduct from "./products/ShowProduct";
import Signup from "../components/auth/Signup";
import Authenticate from "../components/auth/Authenticate";
import "./Layout.css";

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this._goToMarketplace = this._goToMarketplace.bind(this);
    this._goToAuthenticate = this._goToAuthenticate.bind(this);
  }

  componentDidUpdate() {
    componentHandler.upgradeDom()
  }

  _goToMarketplace() {
    this.props.changeRoute("MARKETPLACE");
  }
 _goToAuthenticate() {
  document.getElementById("drawer").className = "mdl-layout__drawer";
    this.props.changeRoute("AUTHENTICATE");
  }

  render() {
    const { param, route } = this.props;
    var header = document.getElementById("header")
    if (header) header.className = "mdl-layout__header layout__header";
    let content;
    switch (route) {
      case "ACCOUNT":
        content = <Account />;
        break;
      case "DASHBOARD":
        content = <Dashboard />;
        break;
      case "LOGIN":
        document.getElementById("header").className += " header--hidden-phone";
        content = <Login />;
        break;
      case "EDITPRODUCT":
        content = <EditProduct product={param} />;
        break;
      case "NEWPRODUCT":
        content = <NewProduct />;
        break;
      case "NEWTRANSACTION":
        content = <NewTransaction product={param} />;
        break;
      case "SHOWPRODUCT":
        content = <ShowProduct product={param} />;
        break;
      case "SIGNUP":
        document.getElementById("header").className += " header--hidden-phone";
        content = <Signup />;
        break;
      case "AUTHENTICATE":
        document.getElementById("header").className += " header--hidden-phone";
        content = <Authenticate />;
        break;
      default:
        content = <Marketplace />;
    }
    return (
      <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header id="header" className="mdl-layout__header layout__header">
            <div className="mdl-layout__header-row">
              <span className="mdl-layout-title">
                <a className="mdl-navigation__link" href="#!" onClick={this._goToMarketplace}>FitBird</a>
              </span>
              <div className="mdl-layout-spacer"></div>
              <Navigation />
            </div>
            <div className="mdl-layout-icon"></div>
          </header>
          <div id="drawer" className="mdl-layout__drawer">
            <span className="mdl-layout-title">FitBird</span>
            <nav className="mdl-navigation">
              <a className="mdl-navigation__link" href="#!" onClick={this._goToAuthenticate}>Login or Sign Up</a>
              <a className="mdl-navigation__link" href="">Link</a>
              <a className="mdl-navigation__link" href="">Link</a>
              <a className="mdl-navigation__link" href="">Link</a>
            </nav>
          </div>
          <main className="mdl-layout__content background-color--white-phone">
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
