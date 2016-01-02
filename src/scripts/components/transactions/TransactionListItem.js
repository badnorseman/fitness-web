"use strict";

const TransactionListItem = ({
  transaction
}) => {
  const { amount, currency, date, transaction_id } = transaction;

  const styles = {
    itemElement: {
      margin: "10px 10px 10px 0",
      maxWidth:"800px",
      width: "25%"
    }
  };

  return (
    <div>
      <hr />
      <div className="block--center-horizontally__flex">
        <div style={styles.itemElement}>{date}</div>
        <div style={styles.itemElement}>{currency}</div>
        <div style={styles.itemElement}>{amount}</div>
        <div style={styles.itemElement}>{transaction_id}</div>
      </div>
    </div>
  );
};

export default TransactionListItem
