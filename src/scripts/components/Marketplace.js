"use strict";
import React, { Component, PropTypes } from "react";
import ProductGrid from "./products/ProductGrid";

export default class Marketplace extends Component {
  constructor(props) {
    super(props);
    this._goToShowProduct = this._goToShowProduct.bind(this);
  }

  componentDidMount() {
    this.props.getProducts();
  }

  _goToShowProduct(product) {
    this.props.changeRoute("SHOWPRODUCT", product);
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        <ProductGrid
          products={products}
          onSelect={this._goToShowProduct} />
      </div>
    );
  }
}
