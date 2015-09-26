"use strict";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeRoute } from "../actions/routeActions";
import { getClientToken } from "../actions/transactionActions";
import Marketplace from "../components/Marketplace";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeRoute, getClientToken }, dispatch);
}

function mapStateToProps(state) {
  const { transactionReducer } = state;
  const { clientToken } = transactionReducer;
  return { clientToken };
}

export default connect(mapStateToProps, mapDispatchToProps)(Marketplace);
