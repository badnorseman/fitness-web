"use strict";
import React, { Component, PropTypes } from "react";
import ProductListItem from "./ProductListItem";

export default class ProductList extends Component {
  static propTypes = {
    products: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this._handleSelect = this._handleSelect.bind(this);
  }

  _getItems() {
    let items = [];
    for (let key in this.props.products) {
      if (this.props.products.hasOwnProperty(key)) {
        items.push(
          <ProductListItem key={key} item={this.props.products[key]} onSelect={this._handleSelect} />
        );
      }
    }
    return items;
  }

  _handleSelect(product) {
    this.props.onSelect(product);
  }

  render() {
    let items = this._getItems();

    return (
      <div className="mdl-grid flex--center">
        {items}
      </div>
    )
  }
}
