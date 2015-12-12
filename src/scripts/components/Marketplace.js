"use strict";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";
import ProductGridList from "./products/ProductGridList";

export default class Marketplace extends Component {
  static propTypes = {
    products: PropTypes.object,
    changeRoute: PropTypes.func.isRequired,
    getProducts: PropTypes.func.isRequired
  }

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
        <ProductGridList
          products={products}
          onSelect={this._goToShowProduct}
        />
      </div>
    );
  }
}
