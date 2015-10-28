// Enable to pass in validators e.g. required, number, amount etc.
// Each validators would have own pattern and each pattern world have an error message.
"use strict";
import React, { Component, findDOMNode, PropTypes } from "react";

export default class InputField extends Component {
  static propTypes = {
    fieldError: PropTypes.string,
    fieldId: PropTypes.string.isRequired,
    fieldName: PropTypes.string.isRequired,
    fieldPattern: PropTypes.string,
    fieldType: PropTypes.string.isRequired,
    fieldClassName: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = { fieldValue: this.props.fieldValue };
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event) {
    event.preventDefault();

    let fieldValue = findDOMNode(this.refs[this.props.fieldId]).value;

    this.setState({ fieldValue: fieldValue });
  }

  render() {
    const { fieldError, fieldId, fieldName, fieldPattern, fieldType, fieldValue, fieldClassName } = this.props;

    return (
      <div className={"mdl-cell mdl-cell--12-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label " + fieldClassName}>
        <input
          className="mdl-textfield__input"
          id={fieldId}
          pattern={fieldPattern}
          type={fieldType}
          value={this.state.fieldValue}
          ref={fieldId}
          onChange={this._handleChange} />
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
