"use strict";
import React, { Component } from "react";
import { render } from "react-dom";

export default class InputFile extends Component {
  constructor() {
    super();
    this.state = { file: "" };
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(ev) {
    ev.preventDefault();

    let file = document.getElementById("file--selected").files[0];

    this.setState({ file: file });
  }

  render() {
    return (
      <div className="mdl-textfield mdl-js-textfield">
        <input
          accept="image/jpeg, image/jpg, image/png"
          className="mdl-textfield__input"
          id="file--selected"
          ref="selectedFile"
          type="file"
          onChange={this._handleChange} />
        <label
          htmlFor="file--selected">
        </label>
      </div>
    )
  }
}
