"use strict";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeRoute } from "../actions/routeActions";
import { getClientToken } from "../actions/transactionActions";
import { getProducts } from "../actions/productActions";
import Marketplace from "../components/Marketplace";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeRoute, getClientToken, getProducts }, dispatch);
}

function mapStateToProps(state) {
  const { productReducer, transactionReducer } = state;
  const { clientToken } = transactionReducer;
  const { isFetching, products } = productReducer;
  return { clientToken, isFetching, products };
}

export default connect(mapStateToProps, mapDispatchToProps)(Marketplace);
