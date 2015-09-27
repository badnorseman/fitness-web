"use strict";
import React, { Component } from "react";

export default class InputFile extends Component {
  constructor() {
    super();
    this.state = { file: "" };
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event) {
    event.preventDefault();

    let file = document.getElementById("file--selected").files[0];

    this.setState({ file: file });
  }

  render() {
    return (
      <div className="mdl-textfield mdl-js-textfield">
        <input
          className="mdl-textfield__input"
          id="file--selected"
          type="file"
          ref="selectedFile"
          accept="image/jpeg, image/jpg, image/png"
          onChange={this._handleChange} />
        <label
          htmlFor="file--selected">
        </label>
      </div>
    )
  }
}
