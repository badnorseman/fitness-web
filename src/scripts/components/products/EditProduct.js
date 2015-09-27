"use strict";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/routeActions";
import { destroyProduct, updateProduct } from "../../actions/productActions";
import ProductForm from "./ProductForm";
import Button from "../Button";
import "./products.css";

class EditProduct extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this._handleClose = this._handleClose.bind(this);
    this._handleEdit = this._handleEdit.bind(this);
    this._handleRemove = this._handleRemove.bind(this);
  }

  _handleClose() {
    this.props.dispatch(changeRoute("DASHBOARD"));
  }

  _handleEdit(product) {
    this.props.dispatch(updateProduct(product));
  }

  _handleRemove() {
    this.props.dispatch(destroyProduct(this.props.product.id));
  }

  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <div className="product-card block--center mdl-card mdl-shadow--2dp">
            <div className="block--center mdl-card__supporting-text mdl-card--border">
              <Button name="Remove" type="button" onClick={this._handleRemove} />
              <ProductForm
                currency={this.props.product.currency}
                description={this.props.product.description}
                id={this.props.product.id}
                image={this.props.product.image}
                name={this.props.product.name}
                price={this.props.product.price}
                onSubmit={this._handleEdit} />
            </div>
            <div className="mdl-card__menu">
              <button
                className="mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect"
                onClick={this._handleClose}>
                <i className="material-icons">close</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(EditProduct);
