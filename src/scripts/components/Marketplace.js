"use strict";
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { changeRoute } from "../actions/router_actions";
import { getProducts } from "../actions/product_actions";
import ProductGridList from "./products/ProductGridList";

class Marketplace extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { products, onShow } = this.props;

    return (
      <div>
        <ProductGridList
          products={products}
          onShow={onShow}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => {
      dispatch(getProducts());
    },
    onShow: (product) => {
      dispatch(changeRoute("SHOWPRODUCT", product));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    products: state.product.products
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Marketplace)
