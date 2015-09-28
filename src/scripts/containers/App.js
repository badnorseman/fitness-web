"use strict";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeRoute } from "../actions/routeActions";
import App from "../components/App";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeRoute }, dispatch);
}

function mapStateToProps(state) {
  const { productReducer, routeReducer } = state;
  const { products } = productReducer;
  const { param, route } = routeReducer;
  return { products, param, route };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
