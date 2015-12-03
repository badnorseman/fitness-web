"use strict";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeRoute } from "../actions/route_actions";
import { getClientToken } from "../actions/transaction_actions";
import { getProducts } from "../actions/product_actions";
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
