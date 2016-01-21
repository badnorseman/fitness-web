"use strict";
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

  const styles = {
    headerElement: {
      margin: "0 0 10px 0",
      maxWidth: "800px",
      width: "25%"
    },
    list: {
      padding: "20px 0 0 0"
    }
  };

  return (
    <div className="block--center-horizontally__margin"
      style={styles.list}>
      <div className="block--center-horizontally__flex">
        <div style={styles.headerElement}>DATE</div>
        <div style={styles.headerElement}>CURRENCY</div>
        <div style={styles.headerElement}>AMOUNT</div>
        <div style={styles.headerElement}>TRANSACTION ID</div>
      </div>
      {items}
    </div>
  );
};

export default TransactionList
