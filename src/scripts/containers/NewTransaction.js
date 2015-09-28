"use strict";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeRoute } from "../actions/routeActions";
import { createTransaction, getClientToken } from "../actions/transactionActions";
import NewTransaction from "../components/transactions/NewTransaction";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeRoute, createTransaction, getClientToken }, dispatch);
}

function mapStateToProps(state) {
  const { clientToken } = state.transactionReducer;
  return { clientToken };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTransaction);
