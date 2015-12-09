"use strict";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeRoute } from "../actions/route_actions";
import Layout from "../components/Layout";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeRoute }, dispatch);
}

function mapStateToProps(state) {
  const { auth, router } = state;
  const { currentUser } = auth;
  const { param, route } = router;
  return { currentUser, param, route };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
