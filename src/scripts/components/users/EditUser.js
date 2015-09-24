"use strict";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { updateUser } from "../../actions/userActions";
import Button from "../Button";
import InputField from "../InputField";
import InputFile from "../InputFile";
import "./EditUser.css";

class EditUser extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(event) {
    event.preventDefault();

    let avatar = this.refs.avatar.state.file;
    let birthday = this.refs.birthday.state.fieldValue;
    let email = this.refs.email.state.fieldValue;
    let gender = this.refs.gender.state.fieldValue;
    let height = this.refs.height.state.fieldValue;
    let id = this.props.user.id;
    let name = this.refs.name.state.fieldValue;
    let weight = this.refs.weight.state.fieldValue;

    if (email && name) {
      this.props.dispatch(updateUser({
        avatar: avatar,
        birth_day: birthday,
        gender: gender,
        height: height,
        email: email,
        id: id,
        name: name,
        weight: weight
      }))
    };
  }

  render() {
    const { user } = this.props;
    const { avatar, birth_day, email, gender, height, name, weight } = user;

    return (
      <div className="user-card block--center mdl-card mdl-shadow--2dp">
        <div className="mdl-card__supporting-text mdl-card--border">
          <form onSubmit={this._handleSubmit}>
            <div className="text--center">
              <div>
                <img className="user-card__avatar" src={avatar} alt="" />
              </div>
              <div>
                <InputFile
                  ref="avatar" />
              </div>
            </div>
            <div>
              <div>
                <InputField
                  fieldId="email"
                  fieldName="Email"
                  fieldType="text"
                  fieldValue={email}
                  ref="email" />
              </div>
              <div>
                <InputField
                  fieldId="name"
                  fieldName="Full Name"
                  fieldType="text"
                  fieldValue={name}
                  ref="name" />
              </div>
              <div>
                <InputField
                  fieldError="Must be M or F"
                  fieldId="gender"
                  fieldName="Gender"
                  fieldPattern="[M|F]"
                  fieldType="text"
                  fieldValue={gender}
                  ref="gender" />
                <div className="divider"></div>
                <InputField
                  fieldId="birthday"
                  fieldName="Day of Birth"
                  fieldType="text"
                  fieldValue={birth_day}
                  ref="birthday" />
              </div>
              <div>
                <InputField
                  fieldId="height"
                  fieldName="Height"
                  fieldType="text"
                  fieldValue={height}
                  ref="height" />
                <div className="divider"></div>
                <InputField
                  fieldId="weight"
                  fieldName="Weight"
                  fieldType="text"
                  fieldValue={weight}
                  ref="weight" />
              </div>
            </div>
            <div className="text--center">
              <Button name="Save" type="submit" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(EditUser)
