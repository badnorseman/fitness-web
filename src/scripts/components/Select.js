"use strict";
import React, { Component, findDOMNode, PropTypes } from "react";
import "./Select.css";

export default class Select extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    key: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    styles: PropTypes.string
  }

  constructor(props) {
    super(props);
    this._handleChange = this._handleChange.bind(this);
    let options = this.props.options ? this.props.options.map(x => <option key={x.value} value={x.value}>{x.name}</option>) : [];
    this.state = { fieldValue: "", options: options };
  }

  _handleChange(event) {
    this.setState({ fieldValue: event.target.value });
    if (this.props.onChange) this.props.onChange(event);
  }
  render() {
    const { id, key, name, styles, options, disabled } = this.props;

    return (
       <div className={styles}>
          <select 
            onChange={this._handleChange} 
            id={id}
            key={key}
            name={name}
            className="select"
            disabled={disabled}
            value={this.state.fieldValue}>
            { !this.state.fieldValue && <option disabled value=""></option>}
            {this.state.options}
          </select>
          <div className="select__underline"></div>
          { !this.state.fieldValue && <label className="select__label">{name}</label>}
          { this.state.fieldValue && <label className="select__label select__label--fly">{name}</label>}
        </div>
    )
  }
}