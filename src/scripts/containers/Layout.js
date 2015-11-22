"use strict";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeRoute } from "../actions/routeActions";
import Layout from "../components/Layout";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeRoute }, dispatch);
}

function mapStateToProps(state) {
  const { authReducer, routeReducer } = state;
  const { currentUser } = authReducer;
  const { param, route } = routeReducer;
  return { currentUser, param, route };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
