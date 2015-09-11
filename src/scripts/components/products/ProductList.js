"use strict";
import React, { Component, PropTypes } from "react";
import ProductListItem from "./ProductListItem";

export default class ProductList extends Component {
  static propTypes = {
    products: PropTypes.object.isRequired,
    onNew: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this._handleNew = this._handleNew.bind(this);
    this._handleSelect = this._handleSelect.bind(this);
  }

  _getItems() {
    let items = [];
    for (let key in this.props.products) {
      if (this.props.products.hasOwnProperty(key)) {
        items.push(
          <ProductListItem key={key} item={this.props.products[key]} onClick={this._handleSelect} />
        );
      }
    }
    return items;
  }

  _handleNew() {
    this.props.onNew();
  }

  _handleSelect(id) {
    this.props.onSelect(id);
  }

  render() {
    let items = this._getItems();

    return (
      <div>
        <div className="mdl-grid">
          {items}
        </div>
        <button
          className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored button--floating-action"
          onClick={this._handleNew}>
          <i className="material-icons">add</i>
        </button>
      </div>
    )
  }
}
