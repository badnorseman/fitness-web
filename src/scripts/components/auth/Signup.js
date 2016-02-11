// Form could be own component
// Can Login and Signup forms be one?
// Add avatar, paperclip functionality
"use strict";
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { signup } from "../../actions/auth_actions";
import Facebook from "./Facebook";
import Link from "../Link";
import Inputfield from "../../components/Inputfield";
import "./signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();

    let email = this.refs.email.state.value;
    let name = this.refs.name.state.value;
    let password = this.refs.password.state.value;
    let passwordConfirmation = this.refs.passwordConfirmation.state.value;

    if (email && name && password && passwordConfirmation) {
      this.props.dispatch(signup({
        email: email,
        name: name,
        password: password,
        password_confirmation: passwordConfirmation
      }));
    }
  }

  render() {
    return (
      <div className="signup-container">
        <div className="mdl-card mdl-shadow--2dp signup">
          <div className="mdl-card__supporting-text">
            <div><Facebook /></div>
            <form>
              <div>
                <Inputfield
                  id="name" label="Name" type="text"
                  styles="signup__input-field"
                  ref="name" />
              </div>
              <div>
                <Inputfield
                  id="email" label="Email" type="text"
                  styles="signup__input-field"
                  ref="email" />
              </div>
              <div>
                <Inputfield
                  id="password" label="Password" type="password"
                  styles="signup__input-field"
                  ref="password" />
              </div>
              <div>
                <Inputfield
                  id="passwordConfirmation" label="Confirm password" type="password"
                  styles="signup__input-field"
                  ref="passwordConfirmation" />
              </div>
              <button type="button"
                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent signup__button--submit"
                onClick={this.handleSubmit}
              >
                Sign up
              </button>
            </form>
            <Link
              route="MARKETPLACE"
              styles="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect signup__button--cancel"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Signup)
