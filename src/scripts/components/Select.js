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
    disabled: PropTypes.bool
  }

  constructor(props) {
    super(props);
    this._handleChange = this._handleChange.bind(this);
    var options = [];
    for(var i=0; i < this.props.options.length; i++) {
      options.push(<option key={this.props.options[i].value} value={this.props.options[i].value}>{this.props.options[i].name}</option>);
    }
    this.state = { isFlying: false, options: options };
  }

  _handleChange(event) {
    console.log("change evenet");
    this.setState({ isFlying: event.target.value });
    if (this.props.onChange)this.props.onChange(event);
  }
  render() {
    const { id, name, options } = this.props;

    return (
       <div className="mdl-cell mdl-cell--4-col mdl-cell mdl-cell--4-col-tablet mdl-cell mdl-cell--4-col-phone display--inline">
          <select disabled = {this.props.disabled} key={this.props.key} onChange={this._handleChange} className="select" id={id} name={name}>
            <option value=""></option>
            {this.state.options}
          </select>
          { this.state.isFlying == false && <label className="select__label" htmlFor="professsion">{name}</label>}
          { this.state.isFlying != false && <label className="select__label select__label--fly" htmlFor="professsion">{name}</label>}

        </div>
    )
  }
}
