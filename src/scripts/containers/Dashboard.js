"use strict";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeRoute } from "../actions/route_actions";
import Dashboard from "../components/Dashboard";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeRoute }, dispatch);
}

function mapStateToProps(state) {
  return {
    isFetching: state.product.isFetching,
    products: state.product.products
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
