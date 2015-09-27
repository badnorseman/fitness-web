"use strict";
import React, { Component, PropTypes } from "react";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this._goToEditProduct = this._goToEditProduct.bind(this);
    this._goToNewProduct = this._goToNewProduct.bind(this);
  }

  _getItems(products) {
    let items = [];
    for (let key in this.props.products) {
      if (this.props.products.hasOwnProperty(key)) {
        items.push(
          <Item key={key} item={this.props.products[key]} onClick={this._goToEditProduct} />
        );
      }
    }
    return items;
  }

  _goToEditProduct(id) {
    this.props.changeRoute("EDITPRODUCT", id);
  }

  _goToNewProduct() {
    this.props.changeRoute("NEWPRODUCT");
  }

  render() {
    const { isFetching, products } = this.props;
    let items = this._getItems(products);

    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          {items}
          <button
            className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored button--floating-action"
            onClick={this._goToNewProduct}>
            <i className="material-icons">add</i>
          </button>
        </div>
      </div>
    );
  }
}

class Item extends Component {
  constructor(props) {
    super(props);
    this._handleSelect = this._handleSelect.bind(this);
  }

  _handleSelect() {
    this.props.onClick(this.props.item.id);
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
