"use strict";
import React, { Component, PropTypes } from "react";
import ProductForm from "./ProductForm";
import Button from "../Button";

export default class EditProduct extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    onBuy: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this._handleBuy = this._handleBuy.bind(this);
    this._handleClose = this._handleClose.bind(this);
    this._handleEdit = this._handleEdit.bind(this);
    this._handleRemove = this._handleRemove.bind(this);
  }

  _handleBuy() {
    this.props.onBuy(this.props.product);
  }

  _handleClose() {
    this.props.onClose();
  }

  _handleEdit(product) {
    this.props.onEdit(product);
  }

  _handleRemove() {
    this.props.onRemove(this.props.product.id);
  }

  render() {
    return (
      <div className="mdl-grid text-center">
        <div className="mdl-cell mdl-cell--12-col">
          <ProductForm
            currency={this.props.product.currency}
            description={this.props.product.description}
            id={this.props.product.id}
            image={this.props.product.image}
            name={this.props.product.name}
            price={this.props.product.price}
            onClose={this._handleClose}
            onSubmit={this._handleEdit} />
          <div className="divider"></div>
          <Button name="Remove" type="button" onClick={this._handleRemove} />
          <div className="divider"></div>
          <Button name="Buy" type="button" onClick={this._handleBuy} />
        </div>
      </div>
    )
  }
}
