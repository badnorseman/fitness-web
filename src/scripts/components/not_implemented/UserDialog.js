"use strict";
import React, { Component } from "react";
import { render } from "react-dom";
import "./user-dialog.css";

class UserDialog extends Component {
  render() {
    const { avatar, name, product } = this.props.user;

    return (
      <dialog id="user-dialog" className="mdl-dialog">
        <h5 className="mdl-dialog__title">{name}</h5>
        <div className="mdl-dialog__content">
          <img className="user-dialog_avatar" src={avatar} alt="" />
          <p>{name}</p>
        </div>
        <div className="mdl-dialog__actions">
          <button id="user-dialog--close" type="button" className="mdl-button">Close</button>
        </div>
      </dialog>
    )
  }

  componentDidMount() {
    const dialog = document.getElementById("user-dialog");

    if (!dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }

    document.getElementById("user-dialog--open").addEventListener("click", () => {
      dialog.showModal();
    })

    document.getElementById("user-dialog--close").addEventListener("click", () => {
      dialog.close();
    })
  }

  componentWillUnmount() {
    document.getElementById("user-dialog--open").removeEventListener("click")
    document.getElementById("user-dialog--close").removeEventListener("click")
  }
}

export default UserDialog
