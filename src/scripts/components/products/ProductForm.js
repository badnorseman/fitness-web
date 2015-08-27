"use strict";
import React, { Component, PropTypes } from "react";
import Button from "../Button";
import InputField from "../InputField";
import InputFile from "../InputFile";

export default class ProductForm extends Component {
  static propTypes = {
    currency: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  }

  static defaultProps = {
    currency: "DKK"
  }

  constructor(props) {
    super(props);
    this._handleClose = this._handleClose.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _getCurrency() {
    let currencies = document.getElementsByName("currency");
    for (let k in currencies) {
      if (currencies[k].checked === true) return currencies[k].value;
    }
  }

  _handleClose() {
    this.props.onClose();
  }

  _handleSubmit(e) {
    e.preventDefault();

    let currency = this._getCurrency();
    let description = this.refs.description.state.fieldValue;
    let id = this.props.id;
    let image = this.refs.image.state.file;
    let name = this.refs.name.state.fieldValue;
    let price = this.refs.price.state.fieldValue;

    if (currency && description && name && price) {
      this.props.onSubmit({
        currency: currency,
        description: description,
        id: id,
        image: image,
        name: name,
        price: price
      })
    };
  }

  _isCurrency(value) {
    return value === this.props.currency;
  }

  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <div>
            <InputField
              fieldError="Must be letter, number, .,: or -"
              fieldId="name"
              fieldName="Name"
              fieldPattern="([a-zA-Z0-9]{1,}[.:-\s]{0,1})+?"
              fieldType="text"
              fieldValue={this.props.name}
              ref="name">
            </InputField>
          </div>
          <div>
            <InputField
              fieldId="description"
              fieldName="Description"
              fieldType="text"
              fieldValue={this.props.description}
              ref="description">
            </InputField>
          </div>
          <div>
            <InputField
              fieldError="Must be number with or without separator . or ,"
              fieldId="price"
              fieldName="Price"
              fieldPattern="[0-9]{1,}((\.|\,)[0-9]{2,2})?"
              fieldType="text"
              fieldValue={this.props.price}
              ref="price">
            </InputField>
          </div>
          <div>
            <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="currency-dkk">
              <input className="mdl-radio__button" id="currency-dkk" type="radio" value="DKK" name="currency" defaultChecked={this._isCurrency("DKK")} />
              <span className="mdl-radio__label">DKK</span>
            </label>
            <div className="divider"></div>
            <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="currency-eur">
              <input className="mdl-radio__button" id="currency-eur" type="radio" value="EUR" name="currency" defaultChecked={this._isCurrency("EUR")} />
              <span className="mdl-radio__label">EUR</span>
            </label>
            <div className="divider"></div>
            <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="currency-usd">
              <input className="mdl-radio__button" id="currency-usd" type="radio" value="USD" name="currency" defaultChecked={this._isCurrency("USD")} />
              <span className="mdl-radio__label">USD</span>
            </label>
          </div>
          <div>
            <img src={this.props.image} alt="" />
          </div>
          <InputFile
            ref="image" />
          <div>
            <Button name="Close" type="button" onClick={this._handleClose} />
            <div className="divider"></div>
            <Button name="Save" type="submit" />
          </div>
        </form>
      </div>
    )
  }
}
