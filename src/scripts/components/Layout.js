"use strict";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";
import Account from "../containers/Account";
import Dashboard from "../components/Dashboard";
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
  static propTypes = {
    changeRoute: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this._goToMarketplace = this._goToMarketplace.bind(this);
  }

  componentDidUpdate() {
    componentHandler.upgradeDom();
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
