// Enable to pass in validators e.g. required, number, amount etc.
// Each validators would have own pattern and each pattern world have an error message.
"use strict";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";

class Inputfield extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    ev.preventDefault();

    this.setState({ value: ev.target.value });
  }

  render() {
    const { errorMessage, id, label, pattern, styles, type } = this.props;
    let value = this.state.value;

    return (
      <div className={"mdl-textfield mdl-js-textfield mdl-textfield--floating-label " + styles}>
        <input
          className="mdl-textfield__input"
          id={id}
          pattern={pattern}
          type={type}
          value={value}
          onChange={this.handleChange} />
        <label
          className="mdl-textfield__label"
          htmlFor={id}>
          {label}
        </label>
        <span
          className="mdl-textfield__error">
          {errorMessage}
        </span>
      </div>
    )
  }
}

Inputfield.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  pattern: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  styles: PropTypes.string
};

export default Inputfield
