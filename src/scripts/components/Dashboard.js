"use strict";
import React, { Component, PropTypes } from "react";
import List from "./List";
import "./Dashboard.css";

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
    const header = {};

    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <div className="dashboard-card block--center-horizontally__margin"><h3>Dashboard</h3></div>
          <div className="dashboard-card block--center-horizontally__margin mdl-card mdl-shadow--2dp">
            <div className="block--center-horizontally__margin mdl-card__supporting-text">
              <div className="mdl-tabs mdl-js-tabs">
                <div className="mdl-tabs__tab-bar">
                  <a href="#products-panel" className="mdl-tabs__tab is-active">Products</a>
                  <a href="#users-panel" className="mdl-tabs__tab">Users</a>
                </div>
                <div className="mdl-tabs__panel is-active" id="products-panel">
                  <DashboardList
                    items={products}
                    onEdit={this._goToEditProduct}
                    onNew={this._goToNewProduct} />
                </div>
                <div className="mdl-tabs__panel" id="users-panel">
                  <List header={header} items={products} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class DashboardList extends Component {
  constructor(props) {
    super(props);
    this._handleEdit = this._handleEdit.bind(this);
    this._handleNew = this._handleNew.bind(this);
  }

  _getItems() {
    let items = [];
    for (let key in this.props.items) {
      if (this.props.items.hasOwnProperty(key)) {
        items.push(
          <DashboardListItem key={key} item={this.props.items[key]} onSelect={this._handleEdit} />
        );
      }
    }
    return items;
  }

  _handleEdit(item) {
    this.props.onEdit(item);
  }

  _handleNew() {
    this.props.onNew();
  }

  render() {
    let items = this._getItems();

    return (
      <div className="dashboard-list">
        {items}
        <button
          className="dashboard-list__button--new mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
          onClick={this._handleNew}>
          <i className="material-icons">add</i>
        </button>
      </div>
    )
  }
}

class DashboardListItem extends Component {
  constructor(props) {
    super(props);
    this._handleSelect = this._handleSelect.bind(this);
  }

  _handleSelect() {
    this.props.onSelect(this.props.item);
  }

  render() {
    const { name } = this.props.item;

    return (
      <a onClick={this._handleSelect} href="#!">
        <div>{name}</div>
      </a>
    )
  }
}
