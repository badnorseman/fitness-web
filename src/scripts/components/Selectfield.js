"use strict";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";

class Selectfield extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ value: value });
  }

  render() {
    const { id, label, styles } = this.props;

    // let options = [];
    // for (let key in this.props.options) {
    //   if (this.props.options.hasOwnProperty(key)) {
    //     options.push(
    //       <li key={key} value={this.props.options[key]} className="mdl-menu__item"
    //         onClick={() => { this.handleChange(this.props.options[key]) }}
    //       >
    //         {this.props.options[key]}
    //       </li>
    //     );
    //   }
    // }

    let value = this.state.value;

    return (
      <div>
        <span>{value}</span>
        <button id="select-btn"
          className="mdl-button mdl-js-button mdl-button--icon">
          <i className="zmdi zmdi-caret-down zmdi-hc-lg"></i>
        </button>
        <ul htmlFor="select-btn" className="mdl-menu mdl-js-menu mdl-menu--bottom-right">
          <li className="mdl-menu__item" onClick={() => { this.handleChange("DKK") }}>
            DKK
          </li>
          <li className="mdl-menu__item" onClick={() => { this.handleChange("EUR") }}>
            EUR
          </li>
          <li className="mdl-menu__item" onClick={() => { this.handleChange("USD") }}>
            USD
          </li>
        </ul>
      </div>
    )
  }
}

Selectfield.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  styles: PropTypes.string
};

export default Selectfield
