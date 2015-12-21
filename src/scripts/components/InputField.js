// Enable to pass in validators e.g. required, number, amount etc.
// Each validators would have own pattern and each pattern world have an error message.
"use strict";
import React, { Component, PropTypes } from "react";
import { findDOMNode, render } from "react-dom";

export default class InputField extends Component {
  state = { fieldValue: this.props.fieldValue };

  change = ev => {
    ev.preventDefault();

    this.setState({
      fieldValue: findDOMNode(this.refs[this.props.fieldId]).value
    });
  };

  render() {
    const { fieldError, fieldId, fieldName, fieldPattern, fieldType, fieldValue, styles } = this.props;

    return (
      <div className={"mdl-textfield mdl-js-textfield mdl-textfield--floating-label " + styles}>
        <input
          className="mdl-textfield__input"
          id={fieldId}
          pattern={fieldPattern}
          ref={fieldId}
          type={fieldType}
          value={this.state.fieldValue}
          onChange={this.change} />
        <label
          className="mdl-textfield__label"
          htmlFor={fieldId}>
          {fieldName}
        </label>
        <span
          className="mdl-textfield__error">
          {fieldError}
        </span>
      </div>
    )
  }
}

InputField.propTypes = {
  fieldError: PropTypes.string,
  fieldId: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  fieldPattern: PropTypes.string,
  fieldType: PropTypes.string.isRequired,
  styles: PropTypes.string
};
