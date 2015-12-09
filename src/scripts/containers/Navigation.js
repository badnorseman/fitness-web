"use strict";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeRoute } from "../actions/route_actions";
import { logout } from "../actions/auth_actions";
import Navigation from "../components/Navigation";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeRoute, logout }, dispatch);
}

function mapStateToProps(state) {
  return {
    currentUser: state.auth.currentUser
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
