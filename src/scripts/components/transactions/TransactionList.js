"use strict";
import TransactionListItem from "./TransactionListItem";

const TransactionList = ({
  transactions
}) => {
  let items = (transactions) => {
    let items = [];
    for (let key in transactions) {
      if (transactions.hasOwnProperty(key)) {
        items.push(
          <TransactionListItem key={key} transaction={transactions[key]}/>
        );
      }
    }
    return items;
  }(transactions);

  const headerElementStyle = {
    margin: "0 10px 10px 0",
    maxWidth: "800px",
    width: "25%"
  };

  const listStyle = {
    padding: "50px 0 0 0"
  };

  return (
    <div className="block--center-horizontally__margin" style={listStyle}>
      <div className="block--center-horizontally__flex">
        <div style={headerElementStyle}>DATE</div>
        <div style={headerElementStyle}>CURRENCY</div>
        <div style={headerElementStyle}>AMOUNT</div>
        <div style={headerElementStyle}>TRANSACTION ID</div>
      </div>
      {items}
    </div>
  );
};

export default TransactionList;
