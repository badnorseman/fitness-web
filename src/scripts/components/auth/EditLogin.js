"use strict";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { updateLogin } from "../../actions/auth_actions";
import Inputfield from "../Inputfield";
import Link from "../Link";

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

    return (
      <div className="mdl-cell mdl-cell--8-col-desktop mdl-cell--2-offset-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--2dp">
        <div className="mdl-card__supporting-text">
          <form>
            <div>
              <Inputfield
                id="email" label="Email" type="text" value={email}
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

EditLogin.propTypes = {
  login: PropTypes.object.isRequired
};

export default connect()(EditLogin)
