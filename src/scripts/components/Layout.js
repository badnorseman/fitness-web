"use strict";
import React, { Component } from "react";
import {
  AUTH0_CLIENT_ID, AUTH0_DOMAIN
} from "../constants/auth0";
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
import "./layout.css";

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { idToken: {} };
    this._goToMarketplace = this._goToMarketplace.bind(this);
  }

  componentDidMount() {
    this._createLock();
    this.setState({ userToken: this._getUserToken()});
  }

  componentDidUpdate() {
    componentHandler.upgradeDom();
  }

  _createLock() {
    this.lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN);
  }

  _getUserToken() {
    let userToken = localStorage.getItem("userToken");
    let authHash = this.lock.parseHash(window.location.hash);

    if (!userToken && authHash) {
      if (authHash.id_token) {
        userToken = authHash.id_token;
        localStorage.setItem("userToken", authHash.id_token);
      }
      if (authHash.error) {
        console.error(authHash);
        return null;
      }
    }
    return userToken;
  }

  _goToMarketplace() {
    this.props.changeRoute("MARKETPLACE");
  }

  render() {
    const { param, route } = this.props;

    let content;
    switch (route) {
      case "ACCOUNT":
        content = <Account />;
        break;
      case "DASHBOARD":
        content = <Dashboard />;
        break;
      case "LOGIN":
        content = <Login lock={this.lock}/>;
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
        content = <Signup />;
        break;
      default:
        content = <Marketplace />;
    }
    return (
      <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header className="mdl-layout__header layout__header">
            <div className="mdl-layout__header-row">
              <span className="mdl-layout-title">
                <a className="mdl-navigation__link" href="#!" onClick={this._goToMarketplace}>
                  FitBird
                </a>
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
