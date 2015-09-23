"use strict";
import React, { Component, PropTypes } from "react";
import Button from "../Button";
import InputField from "../InputField";
import InputFile from "../InputFile";

export default class User extends Component {
  static propTypes = {
    user: PropTypes.object,
    onEdit: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this._handleShow = this._handleShow.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleShow() {
    this.props.onShow();
  }

  _handleSubmit(event) {
    event.preventDefault();

    let avatar = this.refs.avatar.state.file;
    let email = this.refs.email.state.fieldValue;
    let id = this.props.user.id;
    let name = this.refs.name.state.fieldValue;

    if (email && name) {
      this.props.onEdit({
        avatar: avatar,
        email: email,
        id: id,
        name: name
      })
    };
  }

  render() {
    const { avatar, email, name } = this.props.user;

    return (
      <div className="mdl-grid text-center">
        <div className="mdl-cell mdl-cell--12-col">
          <form onSubmit={this._handleSubmit}>
            <div>
              <InputField
                fieldId="email"
                fieldName="Email"
                fieldType="text"
                fieldValue={email}
                ref="email">
              </InputField>
            </div>
            <div>
              <InputField
                fieldId="name"
                fieldName="Full Name"
                fieldType="text"
                fieldValue={name}
                ref="name">
              </InputField>
            </div>
            <div>
              <img src={avatar} alt="" />
            </div>
            <div>
              <InputFile
                ref="avatar" />
            </div>
            <div>
              <Button name="Save" type="submit" />
              <div className="divider"></div>
              <Button name="Show" type="button" onClick={this._handleShow} />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
