"use strict";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeRoute } from "../actions/route_actions";
import Dashboard from "../components/Dashboard";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeRoute }, dispatch);
}

function mapStateToProps(state) {
  const { product } = state;
  const { isFetching, products } = product;
  return { isFetching, products };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
