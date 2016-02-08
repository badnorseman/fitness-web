"use strict";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { updateUser } from "../../actions/user_actions";
import File from "../File";
import Inputfield from "../Inputfield";
import Selectfield from "../Selectfield";
import gender from "../../constants/gender";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();

    let avatar = this.refs.avatar.state.file;
    let birthDay = this.refs.birthDay.state.value;
    let email = this.refs.email.state.value;
    let gender = this.refs.gender.state.value;
    let id = this.props.user.id;
    let name = this.refs.name.state.value;

    if (email && gender && name) {
      this.props.dispatch(updateUser({
        avatar: avatar,
        birth_date: birthDay,
        email: email,
        gender: gender,
        id: id,
        name: name
      }));
    }
  }

  render() {
    const { avatar, birth_date, email, name } = this.props.user;

    const styles = {
      avatar: {
        borderRadius: "48px",
        height: "96px",
        width: "96px"
      },
      form: {
        padding: "50px 0 0 0",
        width: "300px"
      }
    };

    return (
      <form className="center" style={styles.form}>
        <div>
          <Inputfield
            id="name" label="Full name" type="text"
            value={name}
            ref="name" />
        </div>
        <div>
          <Inputfield
            id="email" label="Email" type="text"
            value={email}
            ref="email" />
        </div>
        <div>
          <Selectfield
            id="gender" label="Gender" options={gender}
            value={this.props.user.gender}
            ref="gender" />
        </div>
        <div>
          <Inputfield
            id="birthDay" label="Birthday" type="text"
            value={birth_date}
            ref="birthDay" />
        </div>
        <div>
          <img src={avatar} alt="" style={styles.avatar} />
        </div>
        <div>
          <File ref="avatar" />
        </div>
        <div className="mdl-typography--text-center">
          <button
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
            onClick={this.handleSubmit}
          >
            Save
          </button>
        </div>
      </form>
    )
  }
}

EditUser.propTypes = {
  user: PropTypes.object.isRequired
};

export default connect()(EditUser)
