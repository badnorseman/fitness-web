"use strict";
import React, { Component, findDOMNode, PropTypes } from "react";
import "./select.css";

export default class Select extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    key: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    styles: PropTypes.string,
    value: PropTypes.string
  }

  static defaultProps = {
    value: ""
  }

  constructor(props) {
    super(props);
    this._handleChange = this._handleChange.bind(this);
    this.state = { value: this.props.value};
  }

  _handleChange(event) {
    this.setState({ value: event.target.value });
    if (this.props.onChange) this.props.onChange(event);
  }
  render() {
    const { id, key, name, styles, disabled } = this.props;
    const options = [];
    for (let i=0; i<this.props.options.length; i++) {
      let x = this.props.options[i];
      options.push(<option key={i} value={x.value}>{x.name}</option>);
    }
    return (
       <div className={styles}>
          <select 
            onChange={this._handleChange} 
            id={id}
            key={key}
            name={name}
            className="select"
            disabled={disabled}
            value={this.state.value}>
            <option disabled className="select_empty-value" value=""></option>
            {options}
          </select>
          <div className="select__underline"></div>
          { !this.state.value && <label className="select__label">{name}</label>}
          { this.state.value && <label className="select__label select__label--fly">{name}</label>}
        </div>
    )
  }
}