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
    products: state.product.products,
    users: state.user.users
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
