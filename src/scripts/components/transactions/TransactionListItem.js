// User, product per transaction
// Transaction type f.x. sale, void as avatar s, v
"use strict";

const TransactionListItem = ({ transaction }) => {
  const { amount, currency, transaction_date, transaction_id } = transaction;

  return (
    <li className="mdl-list__item mdl-list__item--three-line">
      <span className="mdl-list__item-primary-content">
        <img className="mdl-list__item-avatar" src="" alt="" />
        <span>User bought product on {transaction_date}</span>
        <span className="mdl-list__item-text-body">
          {transaction_id}&nbsp;{currency}&nbsp;{amount}
        </span>
      </span>
    </li>
  );
};

export default TransactionListItem
