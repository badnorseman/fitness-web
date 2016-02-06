"use strict";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";

class InputTextArea extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    errorMessage: PropTypes.string,
    pattern: PropTypes.string,
    styles: PropTypes.string,
    value: PropTypes.string
  }

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
    const { errorMessage, id, name, pattern, styles, type } = this.props;
    let value = this.state.value;

    return (
      <div className={"mdl-textfield mdl-js-textfield mdl-textfield--floating-label " + styles}>
        <textarea
          className="mdl-textfield__input"
          id={id}
          pattern={pattern}
          type={type}
          value={value}
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
