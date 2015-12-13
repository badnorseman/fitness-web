"use strict";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/router_actions";
import { createProduct } from "../../actions/product_actions";
import ProductForm from "./ProductForm";
import Button from "../Button";
import IconButton from "../IconButton";
import "./products.css";

class NewProduct extends Component {
  constructor(props) {
    super(props);
    this._handleAdd = this._handleAdd.bind(this);
    this._handleClose = this._handleClose.bind(this);
  }

  _handleAdd(product) {
    this.props.dispatch(createProduct(product));
  }

  _handleClose() {
    this.props.dispatch(changeRoute("DASHBOARD"));
  }

  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <div className="product-card mdl-card mdl-shadow--2dp">
            <div className="mdl-card__supporting-text">
              <ProductForm
                onSubmit={this._handleAdd} />
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

export default connect()(NewProduct)
