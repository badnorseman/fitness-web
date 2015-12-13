"use strict";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeRoute } from "../actions/route_actions";
import { createTransaction, getClientToken } from "../actions/transaction_actions";
import NewTransaction from "../components/transactions/NewTransaction";

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeRoute,
    createTransaction,
    getClientToken
  }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    clientToken: state.transaction.clientToken
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTransaction);
