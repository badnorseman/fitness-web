"use strict";
import { connect } from "react-redux";
import TransactionListItem from "./TransactionListItem";

const TransactionList = ({ transactions }) => {
  let items = [];
  for (let key in transactions) {
    if (transactions.hasOwnProperty(key)) {
      items.push(
        <TransactionListItem key={key} transaction={transactions[key]}/>
      );
    }
  }

  return (
    <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--12-col">
        <ul className="mdl-list">
          {items}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    transactions: state.transaction.transactions
  };
};

export default connect(mapStateToProps)(TransactionList)
