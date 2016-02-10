"use strict";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { updateUser } from "../../actions/user_actions";
import File from "../File";
import Inputfield from "../Inputfield";
import Link from "../Link";
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
      }
    };

    return (
      <div className="mdl-cell mdl-cell--6-col-desktop mdl-cell--3-offset-desktop mdl-cell--6-col-tablet mdl-cell--1-offset-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--2dp">
        <div className="mdl-card__supporting-text">
          <form>
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
            <img src={avatar} alt="" style={styles.avatar} />
            <div>
              <File ref="avatar" />
            </div>
          </form>
        </div>
        <div className="mdl-card__actions">
          <button
            className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent"
            onClick={this.handleSubmit}
          >
            Save
          </button>
          <Link
            route="MARKETPLACE"
            styles="mdl-button mdl-js-button mdl-js-ripple-effect"
          >
            Cancel
          </Link>
        </div>
      </div>
    )
  }
}

EditUser.propTypes = {
  user: PropTypes.object.isRequired
};

export default connect()(EditUser)
