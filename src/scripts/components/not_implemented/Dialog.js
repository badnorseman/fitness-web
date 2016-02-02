"use strict";
import React, { Component } from "react";
import { render } from "react-dom";
import "./dialog.css";

class Dialog extends Component {
  render() {
    const { avatar, name, product } = this.props.user;

    return (
      <div>
        <button id="dialog--open" type="button" className="mdl-button mdl-js-button">
          Open
        </button>
        <dialog id="dialog" className="mdl-dialog">
          <h5 className="mdl-dialog__title">{name}</h5>
          <div className="mdl-dialog__content">
            <img className="list__avatar" src={avatar} alt="" />
            <p>{name}</p>
          </div>
          <div className="mdl-dialog__actions">
            <button id="dialog--close" type="button" className="mdl-button">Close</button>
          </div>
        </dialog>
      </div>
    )
  }

  componentDidMount() {
    const dialog = document.getElementById("dialog");

    if (!dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }

    document.getElementById("dialog--open").addEventListener("click", () => {
      dialog.showModal();
    })

    document.getElementById("dialog--close").addEventListener("click", () => {
      dialog.close();
    })
  }

  componentWillUnmount() {
    document.getElementById("dialog--open").removeEventListener("click")
    document.getElementById("dialog--close").removeEventListener("click")
  }
}

export default Dialog
