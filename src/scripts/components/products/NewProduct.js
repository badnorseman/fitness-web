"use strict";
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createProduct } from '../../actions/productActions';
import ProductForm from './ProductForm';
import Button from '../Button';

class NewProduct extends Component {
  static propTypes = {
    currency: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    onClose: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this._handleClose = this._handleClose.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleClose() {
    this.props.onClose();
  }

  _handleSubmit(product) {
    this.props.dispatch(createProduct(product));
  }

  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <Button name="Close" type="button" onClick={this._handleClose} />
          <ProductForm
            currency={this.props.currency}
            description={this.props.description}
            image={this.props.image}
            name={this.props.name}
            price={this.props.price}
            onSubmit={this._handleSubmit} />
        </div>
      </div>
    )
  }
}

export default connect()(NewProduct);
