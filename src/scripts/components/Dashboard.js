"use strict";
import React, { Component, PropTypes } from "react";
import EditProduct from "./products/EditProduct";
import NewProduct from "./products/NewProduct";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this._handleClose = this._handleClose.bind(this);
    this._routeToEdit = this._routeToEdit.bind(this);
    this._routeToNew = this._routeToNew.bind(this);
  }

  componentDidMount() {
    // this.props.getProducts();
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

  _getList(products) {
    let items = this._getItems(products);

    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          {items}
          <button
            className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored button--floating-action"
            onClick={this._routeToNew}>
            <i className="material-icons">add</i>
          </button>
        </div>
      </div>
    );
  }

  _getItems(products) {
    let items = [];
    for (let key in this.props.products) {
      if (this.props.products.hasOwnProperty(key)) {
        items.push(
          <Item key={key} item={this.props.products[key]} onClick={this._routeToEdit} />
        );
      }
    }
    return items;
  }

  _handleClose() {
    this.props.changeRoute("LIST");
  }

  _routeToEdit(id) {
    console.log("_routeToEdit", id);
    this.props.changeRoute("EDIT", id);
  }

  _routeToNew() {
    console.log("_routeToNew");
    this.props.changeRoute("NEW");
  }

  render() {
    const { id, isFetching, products, route } = this.props;
    const product = products[id];

    let content;
    switch (route) {
      case "EDIT":
        content = this._getEditProduct(product);
        break;
      case "NEW":
        content = this._getNewProduct();
        break;
      default:
        content = this._getList(products);
    }
    return (
      <div>
        {content}
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
