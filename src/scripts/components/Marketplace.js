"use strict";
import React, { Component, PropTypes } from "react";
import NewTransaction from "./transactions/NewTransaction";
import ProductList from "./products/ProductList";
import ShowProduct from "./products/ShowProduct";

export default class Marketplace extends Component {
  constructor(props) {
    super(props);
    this._handleClose = this._handleClose.bind(this);
    this._routeToBuy = this._routeToBuy.bind(this);
    this._routeToShow = this._routeToShow.bind(this);
  }

  componentDidMount() {
    this.props.getProducts();
    // getClientToken requires that user is logged in.
    // this.props.getClientToken();
  }

  _getNewTransaction(clientToken, product) {
    return (
      <NewTransaction
        clientToken={clientToken}
        product={product}
        onClose={this._handleClose} />
    );
  }

  _getProductList(products) {
    return (
      <ProductList
        products={products}
        onSelect={this._routeToShow} />
    );
  }

  _getShowProduct(product = {}) {
    return (
      <ShowProduct
        product={product}
        onBuy={this._routeToBuy}
        onClose={this._handleClose} />
    );
  }

  _handleClose() {
    this.props.changeRoute("LIST");
  }

  _routeToBuy(id) {
    this.props.changeRoute("BUY", id);
  }

  _routeToShow(id) {
    this.props.changeRoute("SHOW", id);
  }

  render() {
    const { clientToken, id, isFetching, products, route } = this.props;
    const product = products[id];

    let content;
    switch (route) {
      case "BUY":
        content = this._getNewTransaction(clientToken, product);
        break;
      case "SHOW":
        content = this._getShowProduct(product);
        break;
      default:
        content = this._getProductList(products);
    }
    return (
      <div>
        {content}
      </div>
    );
  }
}
