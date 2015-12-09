"use strict";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeRoute } from "../actions/route_actions";
import { getProducts } from "../actions/product_actions";
import Marketplace from "../components/Marketplace";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeRoute, getProducts }, dispatch);
}

function mapStateToProps(state) {
  return {
    products: state.product.products
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Marketplace);
