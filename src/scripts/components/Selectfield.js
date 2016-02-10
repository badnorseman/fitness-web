"use strict";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";

class Selectfield extends Component {
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
    const { id, label } = this.props;
    let value = this.state.value;

    let options = [];
    this.props.options.forEach(el => {
      options.push(
        <option key={el.value} value={el.value}>{el.label}</option>
      );
    })

    return (
      <span>
        <label htmlFor={id}>
          {label}
        </label>
        <select id={id} value={value} onChange={this.handleChange}>
          {options}
        </select>
      </span>
    )
  }
}

Selectfield.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
};

export default Selectfield
