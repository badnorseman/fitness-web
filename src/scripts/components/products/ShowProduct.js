"use strict";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/routeActions";
import Button from "../Button";
import IconButton from "../IconButton";
import "./products.css";

class ShowProduct extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this._handleBuy = this._handleBuy.bind(this);
    this._handleClose = this._handleClose.bind(this);
  }

  _handleBuy() {
    this.props.dispatch(changeRoute("NEWTRANSACTION", this.props.product.id));
  }

  _handleClose() {
    this.props.dispatch(changeRoute("MARKETPLACE"));
  }

  render() {
    const { product } = this.props;
    const { currency, description, image, name, price} = product;

    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <div className="product-card block--center mdl-card mdl-shadow--2dp">
            <div className="red-border block--center mdl-card__supporting-text mdl-card--border">
              <div className="flex--center">
                <div className="product-card__left">
                  <img className="product-card__image" src={image} alt="" />
                </div>
                <div className="product-card__right">
                  <div>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <h6>{currency} {price}</h6>
                  </div>
                  <Button name="Buy" type="button" onClick={this._handleBuy} />
                </div>
              </div>
            </div>
            <div className="mdl-card__menu">
              <IconButton name="close" onClick={this._handleClose} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(ShowProduct);
