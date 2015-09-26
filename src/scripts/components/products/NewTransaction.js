"use strict";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { createTransaction } from "../../actions/transactionActions";
import Braintree from "braintree-web";
import Button from "../Button";

class NewTransaction extends Component {
  static propTypes = {
    clientToken: PropTypes.string,
    product: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this._handleClose = this._handleClose.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._onPaymentMethodReceived = this._onPaymentMethodReceived.bind(this);
  }

  componentDidMount() {
    Braintree.setup(
      this.props.clientToken,
      "dropin", {
        container: "dropin-container",
        onPaymentMethodReceived: this._onPaymentMethodReceived
      }
    )
  }

  _handleClose() {
    this.props.onClose();
  }

  _handleSubmit(event) {
    event.preventDefault();
  }

  _onPaymentMethodReceived(paymentMethod) {
    let amount = this.props.product.price;
    let currency = this.props.product.currency;
    let id = this.props.product.id;
    let paymentMethodNonce = paymentMethod.nonce;

    if (amount && currency && id && paymentMethodNonce) {
      this.props.dispatch(createTransaction({
        amount: amount,
        currency: currency,
        product_id: id,
        payment_method_nonce: paymentMethodNonce
      }))
    };
  }

  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <Button name="Close" type="button" onClick={this._handleClose}/>
          <form onSubmit={this._handleSubmit}>
            <div id="dropin-container"></div>
            <Button name="Buy" type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(NewTransaction);
