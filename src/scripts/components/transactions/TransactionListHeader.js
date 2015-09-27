"use strict";
import React, { Component, PropTypes } from "react";
import "./transactions.css";

export default class TransactionListHeader extends Component {
  static propTypes = {
    header: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { header } = this.props;

    return (
      <div className="transaction-list-item block--center-horizontally__flex">
        <div className="transaction-list-item__header">DATE</div>
        <div className="transaction-list-item__header">CURRENCY</div>
        <div className="transaction-list-item__header">AMOUNT</div>
        <div className="transaction-list-item__header">TRANSACTION ID</div>
      </div>
    )
  }
}
