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
    this._handleSubmit = this._handleSubmit.bind(this);
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
    const { avatar, birth_day, email, gender, height, name, weight } = this.props.user;

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
              <InputField
                fieldId="gender"
                fieldName="Mand or Woman"
                fieldType="text"
                fieldValue={gender}
                ref="gender">
              </InputField>
            </div>
            <div>
              <InputField
                fieldId="birthday"
                fieldName="Day of Birth"
                fieldType="text"
                fieldValue={birth_day}
                ref="birthday">
              </InputField>
            </div>
            <div>
              <InputField
                fieldId="height"
                fieldName="Height"
                fieldType="text"
                fieldValue={height}
                ref="height">
              </InputField>
            </div>
            <div>
              <InputField
                fieldId="weight"
                fieldName="Height"
                fieldType="text"
                fieldValue={weight}
                ref="weight">
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
            </div>
          </form>
        </div>
      </div>
    )
  }
}
