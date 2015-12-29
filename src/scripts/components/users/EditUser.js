"use strict";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { updateUser } from "../../actions/user_actions";
import InputField from "../InputField";
import InputFile from "../InputFile";
import "./edit_user.css";

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

  _handleSubmit(ev) {
    ev.preventDefault();

    let avatar = this.refs.avatar.state.file;
    let birthDay = this.refs.birthDay.state.fieldValue;
    let email = this.refs.email.state.fieldValue;
    let gender = this._getGender();
    let id = this.props.user.id;
    let name = this.refs.name.state.fieldValue;

    if (email) {
      this.props.dispatch(updateUser({
        avatar: avatar,
        birth_date: birthDay,
        gender: gender,
        email: email,
        id: id,
        name: name
      }));
    }
  }

  _isGender(value) {
    return value === this.props.user.gender;
  }

  render() {
    const { user } = this.props;
    const { avatar, birth_date, email, gender, name } = user;

    return (
      <form className="edit-user block--center-horizontally__margin">
        <div>
          <InputField
            fieldId="name"
            fieldName="Full name"
            fieldType="text"
            fieldValue={name}
            ref="name" />
        </div>
        <div>
          <p>I am</p>
          <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="gender-male">
            <input className="mdl-radio__button" id="gender-male" type="radio" value="M" name="gender" defaultChecked={this._isGender("M")} />
            <span className="mdl-radio__label"><i className="zmdi zmdi-male-alt zmdi-hc-lg"></i></span>
          </label>
          <div className="block--divider"></div>
          <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="gender-female">
            <input className="mdl-radio__button" id="gender-female" type="radio" value="F" name="gender" defaultChecked={this._isGender("F")} />
            <span className="mdl-radio__label"><i className="zmdi zmdi-female zmdi-hc-lg"></i></span>
          </label>
        </div>
        <div>
          <InputField
            fieldId="birthDay"
            fieldName="Birthday"
            fieldType="text"
            fieldValue={birth_date}
            ref="birthDay" />
        </div>
        <div>
          <InputField
            fieldId="email"
            fieldName="Email"
            fieldType="text"
            fieldValue={email}
            ref="email" />
        </div>
        <div>
          <img className="user__avatar" src={avatar} alt="" />
        </div>
        <div>
          <InputFile ref="avatar" />
        </div>
        <div className="text--center">
          <button
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
            onClick={this._handleSubmit}
          >
            Save
          </button>
        </div>
      </form>
    )
  }
}

export default connect()(EditUser)
