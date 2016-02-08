"use strict";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";
import File from "../File";
import Inputfield from "../Inputfield";
import Selectfield from "../Selectfield";
import Textarea from "../Textarea";

class Productform extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();

    let currency = this.refs.currency.state.value;
    let description = this.refs.description.state.value;
    let id = this.props.product.id;
    let image = this.refs.image.state.file;
    let name = this.refs.name.state.value;
    let price = this.refs.price.state.value;

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

  render() {
    const { currency, description, id, image, name, price } = this.props.product;
    const currencies = { DKK: "DKK", EUR: "EUR", USD: "USD" };
    const styles = { image: { maxHeight: "160px" } };

    return (
      <form>
        <div>
          <Inputfield
            id="name" label="Name" type="text"
            errorMessage="Letters and numbers and . , : - only. Start with a letter or number"
            pattern="([a-zA-Z0-9]{1,}[.:-\s]{0,1})+?"
            value={name}
            ref="name" />
        </div>
        <div>
          <Textarea
            id="description" label="Description" type="text"
            value={description}
            ref="description" />
        </div>
        <div>
          <Inputfield
            id="price" label="Price" type="text"
            errorMessage="Number and decimal mark only"
            pattern="[0-9]{1,}((\.|\,)[0-9]{2,2})?"
            value={price}
            ref="price" />
        </div>
        <div>
          <Selectfield
            id="currency" label="Currency" options={currencies}
            value={currency}
            ref="currency" />
        </div>
        <div>
          <img src={image} alt="" style={styles.image} />
        </div>
        <div>
          <File ref="image" />
        </div>
        <div className="mdl-typography--text-center">
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

Productform.propTypes = {
  product: PropTypes.object,
  onRemove: PropTypes.func,
  onSubmit: PropTypes.func.isRequired
};

Productform.defaultProps = {
  product: {
    currency: "DKK",
    description: "",
    image: "",
    name: "",
    price: ""
  }
};

export default Productform