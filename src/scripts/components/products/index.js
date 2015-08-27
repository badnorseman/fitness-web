"use strict";
import React, { Component, PropTypes } from "react";
import EditProduct from "./EditProduct";
import NewProduct from "./NewProduct";
import ProductList from "./ProductList";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this._handleAdd = this._handleAdd.bind(this);
    this._handleClose = this._handleClose.bind(this);
    this._handleEdit = this._handleEdit.bind(this);
    this._handleNew = this._handleNew.bind(this);
    this._handleRemove = this._handleRemove.bind(this);
    this._handleSelect = this._handleSelect.bind(this);
  }

  componentDidMount() {
    this.props.getProducts();
  }

  componentDidUpdate() {
    componentHandler.upgradeDom();
  }

  _getEditProduct(errors = [], product = {}) {
    return (
      <EditProduct
        errors={errors}
        product={product}
        onClose={this._handleClose}
        onEdit={this._handleEdit}
        onRemove={this._handleRemove} />
    );
  }

  _getNewProduct(errors = []) {
    return (
      <NewProduct
        errors={errors}
        onAdd={this._handleAdd}
        onClose={this._handleClose} />
    );
  }

  _getProductList(products) {
    return (
      <ProductList
        products={products}
        onNew={this._handleNew}
        onSelect={this._handleSelect} />
    );
  }

  _handleAdd(product) {
    this.props.createProduct(product);
  }

  _handleClose() {
    this.props.resetError();
    this.props.changeRoute("LIST");
  }

  _handleEdit(product) {
    this.props.updateProduct(product);
  }

  _handleNew() {
    this.props.changeRoute("NEW");
  }

  _handleRemove(id) {
    this.props.destroyProduct(id);
  }

  _handleSelect(id) {
    this.props.changeRoute("EDIT", id);
  }

  render() {
    const { errors, id, isFetching, products, route } = this.props;
    const product = this.props.products[id];

    let content;
    switch (route) {
      case "EDIT":
        content = this._getEditProduct(errors, product);
        break;
      case "NEW":
        content = this._getNewProduct(errors);
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
