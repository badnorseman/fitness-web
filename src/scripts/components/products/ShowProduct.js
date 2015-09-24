"use strict";
import React, { Component, PropTypes } from "react";
import Button from "../Button";

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
          <Button name="Close" type="button" onClick={this._handleClose} />
          <div className="divider"></div>
          {name}
          <div>
            <img src={image} alt="" />
          </div>
          <div>
            {description}
          </div>
          <div>
            {currency}
            <span>{price}</span>
          </div>
          <div className="divider"></div>
          <Button name="Buy" type="button" onClick={this._handleBuy} />
        </div>
      </div>
    )
  }
}
