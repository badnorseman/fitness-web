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

  _getGender() {
    let radios = document.getElementsByName("gender");
    for (let key in radios) {
      if (radios[key].checked === true) return radios[key].value;
    }
  }

  _handleSubmit(event) {
    event.preventDefault();

    let avatar = this.refs.avatar.state.file;
    let birthday = this.refs.birthday.state.fieldValue;
    let email = this.refs.email.state.fieldValue;
    let gender = this._getGender();
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

  _isGender(value) {
    return value === this.props.user.gender;
  }

  render() {
    const { user } = this.props;
    const { avatar, birth_day, email, gender, height, name, weight } = user;

    return (
      <div className="edit-user block--center mdl-card mdl-shadow--2dp">
        <div className="block--center mdl-card__supporting-text mdl-card--border">
          <h4>Profile</h4>
          <br />
          <form onSubmit={this._handleSubmit}>
            <div className="edit-user__left">
              <div>
                <img className="user__avatar" src={avatar} alt="" />
              </div>
              <div>
                <InputFile ref="avatar" />
              </div>
            </div>
            <div className="edit-user__right">
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
                <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="gender-male">
                  <input className="mdl-radio__button" id="gender-male" type="radio" value="M" name="gender" defaultChecked={this._isGender("M")} />
                  <span className="mdl-radio__label"><i className="material-icons">call_merge</i></span>
                </label>
                <div className="block--divider"></div>
                <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="gender-female">
                  <input className="mdl-radio__button" id="gender-female" type="radio" value="F" name="gender" defaultChecked={this._isGender("F")} />
                  <span className="mdl-radio__label"><i className="material-icons">call_split</i></span>
                </label>
              </div>
              <div>
                <InputField
                  fieldId="birthday"
                  fieldName="Day of Birth"
                  fieldType="text"
                  fieldValue={birth_day}
                  ref="birthday" />
              </div>
              <div>
                <InputField
                  fieldError="Must be number"
                  fieldId="height"
                  fieldName="Height"
                  fieldPattern="[0-9]{1,3}?"
                  fieldType="text"
                  fieldValue={height}
                  ref="height" />
              </div>
              <div>
                <InputField
                  fieldError="Must be number"
                  fieldId="weight"
                  fieldName="Weight"
                  fieldPattern="[0-9]{1,3}?"
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

export default connect()(EditUser);
