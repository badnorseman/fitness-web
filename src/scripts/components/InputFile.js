"use strict";
import React, { Component } from "react";
import { render } from "react-dom";

export default class InputFile extends Component {
  state = { file: "" };

  change = ev => {
    ev.preventDefault();

    this.setState({
      file: document.getElementById("file--selected").files[0]
    });
  };

  render() {
    return (
      <div className="mdl-textfield mdl-js-textfield">
        <input
          accept="image/jpeg, image/jpg, image/png"
          className="mdl-textfield__input"
          id="file--selected"
          ref="selectedFile"
          type="file"
          onChange={this.change} />
        <label
          htmlFor="file--selected">
        </label>
      </div>
    )
  }
}
