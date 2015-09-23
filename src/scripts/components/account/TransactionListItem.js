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
    return (
      <div>
        <div className="mdl-cell mdl-cell--12-col">
          {this.props.item.date}
          <div className="divider"></div>
          {this.props.item.currency}
          <div className="divider"></div>
          {this.props.item.amount}
          <div className="divider"></div>
          {this.props.item.transaction_id}
        </div>
      </div>
    )
  }
}
