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
    onSubmit: PropTypes.func.isRequired
  }

  static defaultProps = {
    currency: "DKK"
  }

  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _getCurrency() {
    let radios = document.getElementsByName("currency");
    for (let key in radios) {
      if (radios[key].checked === true) return radios[key].value;
    }
  }

  _handleSubmit(event) {
    event.preventDefault();

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
    const { description, image, name, price } = this.props;

    return (
      <form onSubmit={this._handleSubmit}>
        <div>
          <InputField
            fieldError="Must be letter, number, .,: or -"
            fieldId="name"
            fieldName="Name"
            fieldPattern="([a-zA-Z0-9]{1,}[.:-\s]{0,1})+?"
            fieldType="text"
            fieldValue={name}
            ref="name" />
        </div>
        <div>
          <InputField
            fieldId="description"
            fieldName="Description"
            fieldType="text"
            fieldValue={description}
            ref="description" />
        </div>
        <div>
          <InputField
            fieldError="Must be number with or without separator . or ,"
            fieldId="price"
            fieldName="Price"
            fieldPattern="[0-9]{1,}((\.|\,)[0-9]{2,2})?"
            fieldType="text"
            fieldValue={price}
            ref="price" />
        </div>
        <div>
          <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="currency-dkk">
            <input className="mdl-radio__button" id="currency-dkk" type="radio" value="DKK" name="currency" defaultChecked={this._isCurrency("DKK")} />
            <span className="mdl-radio__label">DKK</span>
          </label>
          <div className="block-divider"></div>
          <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="currency-eur">
            <input className="mdl-radio__button" id="currency-eur" type="radio" value="EUR" name="currency" defaultChecked={this._isCurrency("EUR")} />
            <span className="mdl-radio__label">EUR</span>
          </label>
          <div className="block-divider"></div>
          <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="currency-usd">
            <input className="mdl-radio__button" id="currency-usd" type="radio" value="USD" name="currency" defaultChecked={this._isCurrency("USD")} />
            <span className="mdl-radio__label">USD</span>
          </label>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <InputFile ref="image" />
        </div>
        <div>
          <Button name="Save" type="submit" />
        </div>
      </form>
    )
  }
}
