"use strict";
import React, { Component, PropTypes } from "react";
import Button from "../Button";
import InputField from "../InputField";

export default class User extends Component {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(event) {
    event.preventDefault();

    let email = this.refs.email.state.fieldValue;
    let name = this.refs.fullName.state.fieldValue;
  }

  render() {
    return (
      <div className="mdl-grid text-center">
        <div className="mdl-cell mdl-cell--12-col">
          <form onSubmit={this._handleSubmit}>
          <div>
            <InputField
              fieldId="email"
              fieldName="Email"
              fieldType="text"
              ref="email">
            </InputField>
          </div>
          <div>
            <InputField
              fieldError="Must be letter, number, .,: or -"
              fieldId="fullName"
              fieldName="Full Name"
              fieldPattern="([a-zA-Z0-9]{1,}[.:-\s]{0,1})+?"
              fieldType="text"
              fieldValue={this.props.fullName}
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
