"use strict";
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { changeRoute } from "../actions/router_actions";
import Account from "../components/Account";
import Dashboard from "../components/Dashboard";
import EditProduct from "./products/EditProduct";
import ErrorMessage from "../components/ErrorMessage";
import Footer from "../components/Footer";
import Login from "../components/auth/Login";
import Marketplace from "../components/Marketplace";
import Navigation from "../containers/Navigation";
import NewProduct from "./products/NewProduct";
import NewTransaction from "../containers/NewTransaction";
import ShowProduct from "./products/ShowProduct";
import Signup from "../components/auth/Signup";
import "./layout.css";

class Layout extends Component {
  componentDidUpdate() {
    componentHandler.upgradeDom();
  }

  render() {
    const { param, route, onClick } = this.props;

    let content;
    switch (route) {
      case "ACCOUNT":
        content = <Account />;
        break;
      case "DASHBOARD":
        content = <Dashboard />;
        break;
      case "EDITPRODUCT":
        content = <EditProduct product={param} />;
        break;
      case "LOGIN":
        content = <Login />;
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
                <a href="#!" className="mdl-navigation__link"
                  onClick={onClick}
                >
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

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(changeRoute("MARKETPLACE"));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    param: state.router.param,
    route: state.router.route
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)
