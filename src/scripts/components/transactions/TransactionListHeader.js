"use strict";
import React, { Component, PropTypes } from "react";
import "./TransactionList.css";

export default class TransactionListHeader extends Component {
  render() {
    return (
      <div className="block--center-horizontally__flex">
        <div className="transaction-list__header">DATE</div>
        <div className="transaction-list__header">CURRENCY</div>
        <div className="transaction-list__header">AMOUNT</div>
        <div className="transaction-list__header">TRANSACTION ID</div>
      </div>
    )
  }
}
