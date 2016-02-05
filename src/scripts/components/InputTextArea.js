// Enable to pass in validators e.g. required, number, amount etc.
// Each validators would have own pattern and each pattern world have an error message.
"use strict";
import React, { Component, PropTypes } from "react";
import { findDOMNode, render } from "react-dom";

class InputTextArea extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    errorMessage: PropTypes.string,
    pattern: PropTypes.string,
    styles: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = { fieldValue: this.props.fieldValue };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    let fieldValue = findDOMNode(this.refs[this.props.id]).value;

    this.setState({ fieldValue: fieldValue });
  }

  render() {
    const { errorMessage, id, name, pattern, styles, type, fieldValue } = this.props;

    return (
      <div className={"mdl-textfield mdl-js-textfield mdl-textfield--floating-label " + styles}>
        <textarea
          className="mdl-textfield__input"
          id={id}
          pattern={pattern}
          type={type}
          value={this.state.fieldValue}
          ref={id}
          onChange={this.handleChange} />
        <label
          className="mdl-textfield__label"
          htmlFor={id}>
          {name}
        </label>
        <span
          className="mdl-textfield__error">
          {errorMessage}
        </span>
      </div>
    )
  }
}

export default InputTextArea
