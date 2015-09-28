"use strict";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeRoute } from "../actions/routeActions";
import App from "../components/App";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeRoute }, dispatch);
}

function mapStateToProps(state) {
  const { routeReducer } = state;
  const { param, route } = routeReducer;
  return { param, route };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
