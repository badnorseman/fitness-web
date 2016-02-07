"use strict";
import React, { Component } from "react";
import { render } from "react-dom";

class File extends Component {
  constructor() {
    super();
    this.state = { file: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
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
          type="file"
          onChange={this.handleChange} />
        <label
          htmlFor="file--selected">
        </label>
      </div>
    )
  }
}

export default File
