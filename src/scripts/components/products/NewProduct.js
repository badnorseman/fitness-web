"use strict";
import React, { Component, PropTypes } from 'react';
import ProductForm from './ProductForm';
import Button from '../Button';

export default class NewProduct extends Component {
  static propTypes = {
    currency: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    onAdd: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this._handleAdd = this._handleAdd.bind(this);
    this._handleClose = this._handleClose.bind(this);
  }

  _handleAdd(product) {
    this.props.onAdd(product);
  }

  _handleClose() {
    this.props.onClose();
  }

  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <Button name="Close" type="button" onClick={this._handleClose} />
          <div className="divider"></div>
          <ProductForm
            currency={this.props.currency}
            description={this.props.description}
            image={this.props.image}
            name={this.props.name}
            price={this.props.price}
            onSubmit={this._handleAdd} />
        </div>
      </div>
    )
  }
}
