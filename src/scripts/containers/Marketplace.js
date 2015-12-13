"use strict";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeRoute } from "../actions/router_actions";
import { getProducts } from "../actions/product_actions";
import Marketplace from "../components/Marketplace";

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeRoute,
    getProducts
  }, dispatch);
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
