"use strict";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/routeActions";
import { createProduct } from "../../actions/productActions";
import ProductForm from "./ProductForm";
import Button from "../Button";
import IconButton from "../IconButton";
import "./products.css";

class NewProduct extends Component {
  static propTypes = {
    currency: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number
  }

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
                currency={this.props.currency}
                description={this.props.description}
                image={this.props.image}
                name={this.props.name}
                price={this.props.price}
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

export default connect()(NewProduct);
