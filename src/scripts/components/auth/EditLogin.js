"use strict";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { updateLogin } from "../../actions/auth_actions";
import Inputfield from "../Inputfield";

class EditLogin extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();

    let id = this.props.id;
    let email = this.refs.email.state.value;
    let password = this.refs.password.state.value;
    let passwordConfirmation = this.refs.passwordConfirmation.state.value;

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
      <form className="center" style={styles.form}>
        <div>
          <Inputfield
            id="email" label="Email" type="text"
            value={email}
            ref="email" />
        </div>
        <div>
          <Inputfield
            id="password" label="Password" type="password"
            ref="password" />
        </div>
        <div>
          <Inputfield
            id="passwordConfirmation" label="Confirm password" type="password"
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

EditLogin.propTypes = {
  login: PropTypes.object.isRequired
};

export default connect()(EditLogin)
