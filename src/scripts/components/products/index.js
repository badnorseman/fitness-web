"use strict";
import React, { Component, PropTypes } from 'react';
import EditProduct from './EditProduct';
import NewProduct from './NewProduct';
import NewTransaction from './NewTransaction';
import ProductList from './ProductList';
import ShowProduct from './ShowProduct';

export default class Products extends Component {
  constructor(props) {
    super(props);
    this._handleClose = this._handleClose.bind(this);
    this._routeToBuy = this._routeToBuy.bind(this);
    this._routeToEdit = this._routeToEdit.bind(this);
    this._routeToNew = this._routeToNew.bind(this);
    this._routeToShow = this._routeToShow.bind(this);
  }

  componentDidMount() {
    this.props.getProducts();
    // this.props.getClientToken();
  }

  _getEditProduct(product = {}) {
    return (
      <EditProduct
        product={product}
        onClose={this._handleClose} />
    );
  }

  _getNewProduct() {
    return (
      <NewProduct
        onClose={this._handleClose} />
    );
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
        onNew={this._routeToNew}
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

  _routeToEdit(id) {
    this.props.changeRoute("EDIT", id);
  }

  _routeToNew() {
    this.props.changeRoute("NEW");
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
      case "EDIT":
        content = this._getEditProduct(product);
        break;
      case "NEW":
        content = this._getNewProduct();
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
