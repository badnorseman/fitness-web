"use strict";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { updateLogin } from "../../actions/auth_actions";
import InputField from "../InputField";

class EditLogin extends Component {
  static propTypes = {
    login: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();

    let id = this.props.id;
    let email = this.refs.email.state.fieldValue;
    let password = this.refs.password.state.fieldValue;
    let passwordConfirmation = this.refs.passwordConfirmation.state.fieldValue;

    if (email && password && passwordConfirmation) {
      this.props.dispatch(updateLogin({
        id: id,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation
      }));
    }
  }

  render() {
    const { email } = this.props.login;

    const styles = {
      form: {
        padding: "50px 0 0 0",
        width: "300px"
      }
    };

    return (
      <form className="center"
        style={styles.form}>
        <div>
          <InputField
            id="email"
            name="Email"
            type="text"
            fieldValue={email}
            ref="email" />
        </div>
        <div>
          <InputField
            id="password"
            name="Password"
            type="password"
            ref="password" />
        </div>
        <div>
          <InputField
            id="passwordConfirmation"
            name="Confirm password"
            type="password"
            ref="passwordConfirmation" />
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

export default connect()(EditLogin)
