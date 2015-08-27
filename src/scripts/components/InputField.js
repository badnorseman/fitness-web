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
    fieldType: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { fieldValue: this.props.fieldValue };
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(e) {
    e.preventDefault();

    let fieldValue = findDOMNode(this.refs[this.props.fieldId]).value;

    this.setState({ fieldValue: fieldValue });
  }

  render() {
    return (
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input
          className="mdl-textfield__input"
          id={this.props.fieldId}
          pattern={this.props.fieldPattern}
          type={this.props.fieldType}
          value={this.state.fieldValue}
          ref={this.props.fieldId}
          onChange={this._handleChange} />
        <label
          className="mdl-textfield__label"
          htmlFor={this.props.fieldId}>
          {this.props.fieldName}
        </label>
        <span
          className="mdl-textfield__error">
          {this.props.fieldError}
        </span>
      </div>
    )
  }
}
