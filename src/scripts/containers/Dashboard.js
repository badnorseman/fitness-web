"use strict";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeRoute } from "../actions/routeActions";
import Dashboard from "../components/Dashboard";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeRoute }, dispatch);
}

function mapStateToProps(state) {
  const { productReducer } = state;
  const { isFetching, products } = productReducer;
  return { isFetching, products };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
