"use strict";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeRoute } from "../actions/routeActions";
import * as authActions from "../actions/authActions";
import Navigation from "../components/Navigation";

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, { changeRoute }, authActions), dispatch);
}

function mapStateToProps(state) {
  const { currentUser } = state.sessionReducer;
  return { currentUser };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
