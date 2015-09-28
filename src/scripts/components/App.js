"use strict";
import React, { Component } from "react";
import Account from "../containers/Account";
import Dashboard from "../containers/Dashboard";
import EditProduct from "./products/EditProduct";
import ErrorMessage from "../containers/ErrorMessage";
import Footer from "../components/Footer";
import Login from "../components/auth/Login";
import Marketplace from "../components/Marketplace";
import Navigation from "../containers/Navigation";
import NewProduct from "./products/NewProduct";
import NewTransaction from "./transactions/NewTransaction";
import ShowProduct from "./products/ShowProduct";
import Signup from "../components/auth/Signup";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this._goToMarketplace = this._goToMarketplace.bind(this);
  }

  componentDidMount() {
    this.props.getProducts();
  }

  componentDidUpdate() {
    componentHandler.upgradeDom()
  }

  _getAccount() {
    return <Account />;
  }

  _getDashboard() {
    return <Dashboard />;
  }

  _getEditProduct(product = {}) {
    return <EditProduct product={product} />;
  }

  _getShowProduct(product = {}) {
    return <ShowProduct product={product} />;
  }

  _getNewProduct() {
    return <NewProduct />;
  }

  _getNewTransaction(clientToken, product) {
    return (
      <NewTransaction
        clientToken={clientToken}
        product={product} />
    );
  }

  _getLogin() {
    return <Login />;
  }

  _getMarketplace(products) {
    return <Marketplace products={products} />;
  }

  _getSignup() {
    return <Signup />;
  }

  _goToMarketplace() {
    this.props.changeRoute("MARKETPLACE");
  }

  render() {
    const { clientToken, id, isFetching, products, route } = this.props;
    const product = products[id];

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
      case "EDITPRODUCT":
        content = this._getEditProduct(product);
        break;
      case "NEWPRODUCT":
        content = this._getNewProduct();
        break;
      case "NEWTRANSACTION":
        content = this._getNewTransaction(clientToken, product);
        break;
      case "SHOWPRODUCT":
        content = this._getShowProduct(product);
        break;
      case "SIGNUP":
        content = this._getSignup();
        break;
      default:
        content = this._getMarketplace(products);
    }
    return (
      <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header className="mdl-layout__header layout__header">
            <div className="mdl-layout__header-row">
              <span className="mdl-layout-title">
                <a className="mdl-navigation__link" href="#!" onClick={this._goToMarketplace}>FitBird</a>
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
