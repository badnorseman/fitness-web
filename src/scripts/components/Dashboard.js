"use strict";
import React, { Component, PropTypes } from "react";
import ProductList from "./products/ProductList";
import UserList from "./users/UserList";
import "./dashboard2.css";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this._goToEditProduct = this._goToEditProduct.bind(this);
    this._goToNewProduct = this._goToNewProduct.bind(this);
  }

  _goToEditProduct(product) {
    this.props.changeRoute("EDITPRODUCT", product);
  }

  _goToNewProduct() {
    this.props.changeRoute("NEWPRODUCT");
  }

  render() {
    const { products } = this.props;

    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <div className="dashboard-card block--center-horizontally__margin"><h3>Dashboard</h3></div>
          <div className="dashboard-card block--center-horizontally__margin mdl-card mdl-shadow--2dp">
            <div className="block--center-horizontally__margin mdl-card__supporting-text">
              <div className="mdl-tabs mdl-js-tabs">
                <div className="mdl-tabs__tab-bar">
                  <a href="#products-panel" className="mdl-tabs__tab is-active">Products</a>
                  <a href="#clients-panel" className="mdl-tabs__tab">Clients</a>
                </div>
                <div className="mdl-tabs__panel is-active" id="products-panel">
                  <ProductList
                    items={products}
                    onEdit={this._goToEditProduct}
                    onNew={this._goToNewProduct} />
                </div>
                <div className="mdl-tabs__panel" id="clients-panel">
                  <UserList items={products} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
