"use strict";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";
import ProductGridTile from "./ProductGridTile";

export default class ProductGridList extends Component {
  static propTypes = {
    products: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this._handleSelect = this._handleSelect.bind(this);
  }

  _getTiles() {
    let tiles = [];
    for (let key in this.props.products) {
      if (this.props.products.hasOwnProperty(key)) {
        tiles.push(
          <ProductGridTile key={key} tile={this.props.products[key]} onSelect={this._handleSelect} />
        );
      }
    }
    return tiles;
  }

  _handleSelect(product) {
    this.props.onSelect(product);
  }

  render() {
    let tiles = this._getTiles();

    return (
      <div className="mdl-grid">
        {tiles}
      </div>
    )
  }
}
