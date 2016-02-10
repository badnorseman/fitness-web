"use strict";
import React, { Component, PropTypes } from "react";
import Braintree from "braintree-web";
import { render } from "react-dom";
import { connect } from "react-redux";
import { createTransaction, getClientToken } from "../../actions/transaction_actions";
import Link from "../Link";

class NewTransaction extends Component {
  constructor(props) {
    super(props);
    this.onPaymentMethodReceived = this.onPaymentMethodReceived.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getClientToken());
  }

  componentDidUpdate() {
    Braintree.setup(
      this.props.clientToken,
      "dropin", {
        container: "dropin-container",
        onPaymentMethodReceived: this.onPaymentMethodReceived
      }
    );
  }

  onPaymentMethodReceived(paymentMethod) {
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
      }));
    }
  }

  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--6-col-desktop mdl-cell--3-offset-desktop mdl-cell--6-col-tablet mdl-cell--1-offset-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--2dp">
          <div className="mdl-card__supporting-text">
            <form onSubmit={ev => ev.preventDefault()}>
              <div id="dropin-container"></div>
              <br />
              <button type="submit"
                className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent"
              >
                Buy now
              </button>
              <Link
                route="MARKETPLACE"
                styles="mdl-button mdl-js-button mdl-js-ripple-effect"
              >
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

NewTransaction.propTypes = {
  clientToken: PropTypes.string.isRequired,
  product: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    clientToken: state.transaction.clientToken
  };
};

export default connect(mapStateToProps)(NewTransaction)
