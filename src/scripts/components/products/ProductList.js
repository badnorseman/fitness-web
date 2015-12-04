"use strict";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";
import ProductListItem from "./ProductListItem";

export default class ProductList extends Component {
  static propTypes = {
    items: PropTypes.object.isRequired,
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
    for (let key in this.props.items) {
      if (this.props.items.hasOwnProperty(key)) {
        items.push(
          <ProductListItem key={key} item={this.props.items[key]} onSelect={this._handleEdit} />
        );
      }
    }
    return items;
  }

  _handleEdit(item) {
    this.props.onEdit(item);
  }

  _handleNew() {
    this.props.onNew();
  }

  render() {
    let items = this._getItems();
    const buttonNewStyle = {
      float: "right",
      margin: "50px 0 0 0"
    };
    const headerElementStyle = {
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
          <div style={headerElementStyle}>NAME</div>
          <div style={headerElementStyle}>CURRENCY</div>
          <div style={headerElementStyle}>PRICE</div>
          <div style={headerElementStyle}>NUMBERS OF USERS</div>
        </div>
        {items}
        <button
          className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
          style={buttonNewStyle}
          onClick={this._handleNew}>
          <i className="material-icons">add</i>
        </button>
      </div>
    )
  }
}
