import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { getTransactions } from "../actions/transactionActions";
import * as userActions from "../actions/userActions";
import Account from "../components/Account";

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, { getTransactions }, userActions), dispatch);
}

function mapStateToProps(state) {
  const { sessionReducer, transactionReducer, userReducer } = state;
  const { currentUser } = sessionReducer;
  const { transactions } = transactionReducer;
  const { user } = userReducer;
  return { currentUser, transactions, user };
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
