"use strict";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/router_actions";
import { destroyProduct, updateProduct } from "../../actions/product_actions";
import ProductForm from "./ProductForm";
import Button from "../Button";
import IconButton from "../IconButton";
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
    const { product } = this.props;

    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <div className="product-card mdl-card mdl-shadow--2dp">
            <div className="mdl-card__supporting-text">
              <Button name="Remove" type="button" onClick={this._handleRemove} />
              <ProductForm
                product={product}
                onSubmit={this._handleEdit} />
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

export default connect()(EditProduct);
