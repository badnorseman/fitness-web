import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { createTransaction, getClientToken } from "../actions/transactionActions";
import NewTransaction from "../components/transactions/NewTransaction";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createTransaction, getClientToken }, dispatch);
}

function mapStateToProps(state) {
  return {
    state.transactionReducer.clientToken,
    state.transactionReducer.errors
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTransaction);
