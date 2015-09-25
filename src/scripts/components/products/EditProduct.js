"use strict";
import React, { Component, PropTypes } from 'react';
import ProductForm from './ProductForm';
import Button from '../Button';

export default class EditProduct extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this._handleClose = this._handleClose.bind(this);
    this._handleEdit = this._handleEdit.bind(this);
    this._handleRemove = this._handleRemove.bind(this);
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
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <Button name="Close" type="button" onClick={this._handleClose} />
          <div className="divider"></div>
          <ProductForm
            currency={this.props.product.currency}
            description={this.props.product.description}
            id={this.props.product.id}
            image={this.props.product.image}
            name={this.props.product.name}
            price={this.props.product.price}
            onSubmit={this._handleEdit} />
          <div className="divider"></div>
          <Button name="Remove" type="button" onClick={this._handleRemove} />
        </div>
      </div>
    )
  }
}
