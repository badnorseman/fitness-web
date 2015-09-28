"use strict";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeRoute } from "../actions/routeActions";
import { getProducts } from "../actions/productActions";
import App from "../components/App";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeRoute, getProducts }, dispatch);
}

function mapStateToProps(state) {
  const { productReducer, routeReducer } = state;
  const { isFetching, products } = productReducer;
  const { id, route } = routeReducer;
  return { id, isFetching, products, route };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
