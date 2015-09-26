"use strict";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeRoute } from "../actions/routeActions";
import Dashboard from "../components/Dashboard";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeRoute }, dispatch);
}

function mapStateToProps(state) {
  const { productReducer, routeReducer } = state;
  const { isFetching, products } = productReducer;
  const { id, route } = routeReducer;
  return { id, isFetching, products, route };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
