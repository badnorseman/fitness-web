"use strict";
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { changeRoute } from "../actions/router_actions";
import { getCoaches } from "../actions/coach_actions";
import { getProducts } from "../actions/product_actions";
import CoachGridList from "./coaches/CoachGridList";
import ProductGridList from "./products/ProductGridList";

class Marketplace extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCoaches();
    this.props.getProducts();
  }

  render() {
    const { coaches, products, showCoach, showProduct } = this.props;

    return (
      <div>
        <ProductGridList
          products={products}
          onShow={showProduct}
        />
        <CoachGridList
          coaches={coaches}
          onShow={showCoach}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCoaches: () => {
      dispatch(getCoaches());
    },
    getProducts: () => {
      dispatch(getProducts());
    },
    showCoach: (coach) => {
      dispatch(changeRoute("SHOWCOACH", coach));
    },
    showProduct: (product) => {
      dispatch(changeRoute("SHOWPRODUCT", product));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    coaches: state.coach.coaches,
    products: state.product.products
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Marketplace)
