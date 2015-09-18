"use strict";
import React, { Component, PropTypes } from "react";
import Button from "../Button";
import InputField from "../InputField";

export default class User extends Component {
  static propTypes = {
    user: PropTypes.object,
    onEdit: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(event) {
    event.preventDefault();

    let email = this.refs.email.state.fieldValue;
    let id = this.props.user.id;
    let name = this.refs.fullName.state.fieldValue;

    if (email && name) {
      this.props.onEdit({
        email: email,
        id: id,
        name: name
      })
    };
  }

  render() {
    const { name, email } = this.props.user;

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
                fieldId="fullName"
                fieldName="Full Name"
                fieldType="text"
                fieldValue={name}
                ref="fullName">
              </InputField>
            </div>
            <div className="divider"></div>
            <Button name="Save" type="submit" />
          </form>
        </div>
      </div>
    )
  }
}
