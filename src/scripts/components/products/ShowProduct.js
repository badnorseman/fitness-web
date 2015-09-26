"use strict";
import React, { Component, PropTypes } from 'react';
import Button from '../Button';
import './ShowProduct.css';

export default class ShowProduct extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    onBuy: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this._handleBuy = this._handleBuy.bind(this);
    this._handleClose = this._handleClose.bind(this);
  }

  _handleBuy() {
    this.props.onBuy(this.props.product);
  }

  _handleClose() {
    this.props.onClose();
  }

  render() {
    const { product } = this.props;
    const { currency, description, image, name, price} = product;

    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <div className="show-product block--center mdl-card mdl-shadow--2dp">
            <div className="block--center mdl-card__supporting-text mdl-card--border">
              <Button name="Close" type="button" onClick={this._handleClose} />
              <br />
              <div className="flex--center">
                <div className="show-product__left">
                  <div className="flex--center">
                    <img src={image} alt="" />
                  </div>
                </div>
                <div className="show-product__right">
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <h6>{currency} {price}</h6>
                  <br />
                  <Button name="Buy" type="button" onClick={this._handleBuy} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
