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
      <div className="mdl-cell mdl-cell--6-col-desktop mdl-cell--3-offset-desktop mdl-cell--6-col-tablet mdl-cell--1-offset-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--2dp">
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
