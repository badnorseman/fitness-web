"use strict";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeRoute } from "../actions/route_actions";
import { createTransaction, getClientToken } from "../actions/transaction_actions";
import NewTransaction from "../components/transactions/NewTransaction";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeRoute, createTransaction, getClientToken }, dispatch);
}

function mapStateToProps(state) {
  const { transaction } = state;
  const { clientToken } = transaction;
  return { clientToken };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTransaction);
