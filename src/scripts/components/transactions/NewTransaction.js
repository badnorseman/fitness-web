"use strict";
import React, { Component, PropTypes } from "react";
import Braintree from "braintree-web";
import { render } from "react-dom";
import { connect } from "react-redux";
import { createTransaction, getClientToken } from "../../actions/transaction_actions";
import Link from "../Link";

class NewTransaction extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(ev) {
    ev.preventDefault();
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
    const styles = {
      dropin: {
        marginBottom: "20px",
        marginTop: "40px",
        width: "100%"
      }
    };

    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp center">
          <div className="mdl-card__menu">
            <Link
              route="MARKETPLACE"
              styles="mdl-button mdl-js-button mdl-button--icon"
            >
              <i className="zmdi zmdi-close"></i>
            </Link>
          </div>
          <div className="mdl-card__supporting-text">
            <form onSubmit={this.handleSubmit}>
              <div id="dropin-container"
                style={styles.dropin}>
              </div>
              <div className="mdl-typography--text-center">
                <button type="submit"
                  className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                >
                  Buy
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    clientToken: state.transaction.clientToken
  };
};

export default connect(mapStateToProps)(NewTransaction)
