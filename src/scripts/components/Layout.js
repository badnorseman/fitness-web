"use strict";
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { getCoaches } from "../actions/coach_actions";
import { getProducts } from "../actions/product_actions";
import { goTo } from "../actions/router_actions";
import { logout } from "../actions/auth_actions";
import About from "./About";
import Account from "./Account";
import Cart from "./Cart";
import Dashboard from "./Dashboard";
import EditProduct from "./products/EditProduct";
import ErrorMessage from "./ErrorMessage";
import Footer from "./Footer";
import Header from "./Header";
import Help from "./Help";
import Login from "./auth/Login";
import Marketplace from "./Marketplace";
import NewPassword from "./auth/NewPassword";
import NewProduct from "./products/NewProduct";
import NewTransaction from "./transactions/NewTransaction";
import ShowCoach from "./coaches/ShowCoach";
import ShowProduct from "./products/ShowProduct";
import Sidebar from "./Sidebar";
import Signup from "./auth/Signup";
import Terms from "./Terms";
import "./layout.css";

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCoaches();
    this.props.getProducts();
  }

  componentDidUpdate() {
    componentHandler.upgradeDom();
  }

  render() {
    const { currentUser, param, route, goTo, logout } = this.props;

    let content;
    switch (route) {
      case "ABOUT":
        content = <About />;
        break;
      case "ACCOUNT":
        content = <Account />;
        break;
      case "CART":
        content = <Cart goTo={goTo} />;
        break;
      case "DASHBOARD":
        content = <Dashboard goTo={goTo} />;
        break;
      case "EDITPRODUCT":
        content = <EditProduct product={param} />;
        break;
      case "HELP":
        content = <Help />;
        break;
      case "LOGIN":
        content = <Login />;
        break;
      case "NEWPASSWORD":
        content = <NewPassword />;
        break;
      case "NEWPRODUCT":
        content = <NewProduct />;
        break;
      case "NEWTRANSACTION":
        content = <NewTransaction product={param} />;
        break;
      case "SHOWCOACH":
        content = <ShowCoach coach={param} goTo={goTo} />;
        break;
      case "SHOWPRODUCT":
        content = <ShowProduct product={param} goTo={goTo} />;
        break;
      case "SIGNUP":
        content = <Signup />;
        break;
      case "TERMS":
        content = <Terms />;
        break;
      default:
        content = <Marketplace goTo={goTo} />;
    }
    return (
      <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Header
            currentUser={currentUser}
            goTo={goTo}
            logout={logout}
          />
          <Sidebar
            currentUser={currentUser}
            goTo={goTo}
            logout={logout}
          />
          <main className="mdl-layout__content">
            <ErrorMessage />
            <div>{content}</div>
            <div className="mdl-layout-spacer"></div>
            <Footer goTo={goTo} />
          </main>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCoaches: () => { dispatch(getCoaches()); },
    getProducts: () => { dispatch(getProducts()); },
    goTo: (route, param) => { dispatch(goTo(route, param)); },
    logout: () => { dispatch(logout()); }
  };
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
    param: state.router.param,
    route: state.router.route
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)
