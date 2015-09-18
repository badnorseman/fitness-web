import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { getTransactions } from "../actions/transactionActions";
import * as userActions from "../actions/userActions";
import Account from "../components/account";

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, { getTransactions }, userActions), dispatch);
}

function mapStateToProps(state) {
  const { authReducer, transactionReducer } = state;
  const { isFetching, transactions } = transactionReducer;
  const { user } = authReducer;
  return { isFetching, transactions, user };
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
