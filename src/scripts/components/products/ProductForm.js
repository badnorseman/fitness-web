"use strict";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";
import InputField from "../InputField";
import InputFile from "../InputFile";

export default class ProductForm extends Component {
  static propTypes = {
    product: PropTypes.object,
    onRemove: PropTypes.func,
    onSubmit: PropTypes.func.isRequired
  }

  static defaultProps = {
    product: {
      currency: "DKK",
      description: "",
      image: "",
      name: "",
      price: ""
    }
  }

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getCurrency() {
    let radios = document.getElementsByName("currency");
    for (let key in radios) {
      if (radios[key].checked === true) return radios[key].value;
    }
  }

  handleSubmit(ev) {
    ev.preventDefault();

    let currency = this.getCurrency();
    let description = this.refs.description.state.fieldValue;
    let id = this.props.product.id;
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
      });
    }
  }

  isCurrency(value) {
    return value === this.props.product.currency;
  }

  render() {
    const { description, id, image, name, price } = this.props.product;

    const styles = {
      image: {
        maxHeight: "160px"
      }
    };

    return (
      <form>
        <div>
          <InputField
            fieldError="Use letter, number, .,: or -"
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
            fieldError="Use number with or without separator . or ,"
            fieldId="price"
            fieldName="Price"
            fieldPattern="[0-9]{1,}((\.|\,)[0-9]{2,2})?"
            fieldType="text"
            fieldValue={price}
            ref="price" />
        </div>
        <div>
          <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="currency-dkk">
            <input className="mdl-radio__button" id="currency-dkk" type="radio" value="DKK" name="currency" defaultChecked={this.isCurrency("DKK")} />
            <span className="mdl-radio__label">DKK</span>
          </label>
          <div className="divider"></div>
          <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="currency-eur">
            <input className="mdl-radio__button" id="currency-eur" type="radio" value="EUR" name="currency" defaultChecked={this.isCurrency("EUR")} />
            <span className="mdl-radio__label">EUR</span>
          </label>
          <div className="divider"></div>
          <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="currency-usd">
            <input className="mdl-radio__button" id="currency-usd" type="radio" value="USD" name="currency" defaultChecked={this.isCurrency("USD")} />
            <span className="mdl-radio__label">USD</span>
          </label>
        </div>
        <div>
          <img src={image} alt="" style={styles.image} />
        </div>
        <div>
          <InputFile ref="image" />
        </div>
        <div className="text--center">
          {id && <button
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
            onClick={ev => {
              ev.preventDefault();
              this.props.onRemove(id);
            }}
          >
            Remove
          </button>}
          <div className="divider"></div>
          <button
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
            onClick={this.handleSubmit}
          >
            Save
          </button>
        </div>
      </form>
    )
  }
}
