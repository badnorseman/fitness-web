"use strict";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";
import Braintree from "braintree-web";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/router_actions";
import { createTransaction, getClientToken } from "../../actions/transaction_actions";
import Button from "../Button";
import IconButton from "../IconButton";
import "./new_transaction.css";

class NewTransaction extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this._handleClose = this._handleClose.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._onPaymentMethodReceived = this._onPaymentMethodReceived.bind(this);
  }

  componentDidMount() {
    this.props.getClientToken();
  }

  componentDidUpdate() {
    Braintree.setup(
      this.props.clientToken,
      "dropin", {
        container: "dropin-container",
        onPaymentMethodReceived: this._onPaymentMethodReceived
      }
    );
  }

  _handleClose() {
    this.props.changeRoute("MARKETPLACE");
  }

  _handleSubmit(e) {
    e.preventDefault();
  }

  _onPaymentMethodReceived(paymentMethod) {
    let amount = this.props.product.price;
    let currency = this.props.product.currency;
    let id = this.props.product.id;
    let paymentMethodNonce = paymentMethod.nonce;

    if (amount && currency && id && paymentMethodNonce) {
      this.props.createTransaction({
        amount: amount,
        currency: currency,
        product_id: id,
        payment_method_nonce: paymentMethodNonce
      });
    }
  }

  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <div className="mdl-card mdl-shadow--2dp">
            <div className="mdl-card__supporting-text">
              <form onSubmit={this._handleSubmit}>
                <div className="braintree-dropin" id="dropin-container"></div>
                <Button
                  name="Buy"
                  type="submit"
                />
              </form>
            </div>
            <div className="mdl-card__menu">
              <IconButton
                name="close"
                onClick={this._handleClose}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeRoute,
    createTransaction,
    getClientToken
  }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    clientToken: state.transaction.clientToken
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTransaction)
