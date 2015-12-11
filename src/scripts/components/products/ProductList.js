"use strict";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";
import ProductListItem from "./ProductListItem";

export default class ProductList extends Component {
  static propTypes = {
    products: PropTypes.object,
    onEdit: PropTypes.func.isRequired,
    onNew: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this._handleEdit = this._handleEdit.bind(this);
    this._handleNew = this._handleNew.bind(this);
  }

  _getItems() {
    let items = [];
    for (let key in this.props.products) {
      if (this.props.products.hasOwnProperty(key)) {
        items.push(
          <ProductListItem key={key} item={this.props.products[key]} onSelect={this._handleEdit} />
        );
      }
    }
    return items;
  }

  _handleEdit(product) {
    this.props.onEdit(product);
  }

  _handleNew() {
    this.props.onNew();
  }

  render() {
    let items = this._getItems();
    const buttonStyle = {
      float: "right",
      margin: "50px 0 0 0"
    };
    const headerStyle = {
      margin: "0 10px 10px 0",
      maxWidth: "800px",
      width: "25%"
    };
    const listStyle = {
      padding: "50px 0 0 0"
    };
    return (
      <div className="block--center-horizontally__margin" style={listStyle}>
        <div className="block--center-horizontally__flex">
          <div style={headerStyle}>NAME</div>
          <div style={headerStyle}>CURRENCY</div>
          <div style={headerStyle}>PRICE</div>
          <div style={headerStyle}>NUMBERS OF USERS</div>
        </div>
        {items}
        <button
          className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
          style={buttonStyle}
          onClick={this._handleNew}>
          <i className="material-icons">add</i>
        </button>
      </div>
    )
  }
}
