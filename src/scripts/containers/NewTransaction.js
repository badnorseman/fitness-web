import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { createTransaction, getClientToken } from "../actions/transactionActions";
import NewTransaction from "../components/transactions/NewTransaction";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createTransaction, getClientToken }, dispatch);
}

function mapStateToProps(state) {
  const { transactionReducer } = state;
  const { clientToken, errors } = transactionReducer;
  return { clientToken, errors };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTransaction);
