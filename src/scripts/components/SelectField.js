"use strict";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";

class SelectField extends Component {
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
    const { id, label, styles } = this.props;

    let options = [];
    for (let key in this.props.options) {
      if (this.props.options.hasOwnProperty(key)) {
        options.push(
          <option key={key} value={this.props.options[key]}>
            {this.props.options[key]}
          </option>
        );
      }
    }

    let value = this.state.value;

    return (
      <div className={" " + styles}>
        <label
          className=""
          htmlFor={id}
        >
          {label}
        </label>
        <select
          className=""
          id={id}
          value={value}
          onChange={this.handleChange}
        >
          {options}
        </select>
      </div>
    )
  }
}

SelectField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  styles: PropTypes.string
};

export default SelectField
