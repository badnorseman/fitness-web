"use strict";
import React, { Component, PropTypes } from "react";

export default class TransactionListItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    const { amount, currency, date, transaction_id } = item;

    return (
      <tr>
        <td className="mdl-data-table__cell--non-numeric">{date}</td>
        <td className="mdl-data-table__cell--non-numeric">{currency}</td>
        <td className="mdl-data-table__cell--non-numeric">{amount}</td>
        <td className="mdl-data-table__cell--non-numeric">{transaction_id}</td>
      </tr>
    )
  }
}
