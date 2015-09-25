// Form could be own component
// Can Login and Signup forms be one?
// Add avatar, paperclip functionality
"use strict";
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/authActions';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import Oauth from '../../components/auth/Oauth';

class Signup extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this._handleClose = this._handleClose.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleClose() {
    this.props.onClose();
  }

  _handleSubmit(event) {
    event.preventDefault();

    let email = this.refs.email.state.fieldValue;
    let password = this.refs.password.state.fieldValue;
    let passwordConfirmation = this.refs.passwordConfirmation.state.fieldValue;

    if (email && password && passwordConfirmation) {
      this.props.dispatch(signup({
        email: email,
        password: password,
        password_confirmation: passwordConfirmation
      }))
    };
  }

  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <Button name="Close" type="button" onClick={this._handleClose} />
          <div className="divider"></div>
          <div><Oauth provider="facebook"/></div>
          <div className="divider"></div>
          <div><Oauth provider="google_oauth2" /></div>
          <div>
            <form onSubmit={this._handleSubmit}>
              <div>
                <InputField
                  fieldId="email"
                  fieldName="Email"
                  fieldType="text"
                  ref="email" />
              </div>
              <div>
                <InputField
                  fieldId="password"
                  fieldName="Password"
                  fieldType="password"
                  ref="password" />
              </div>
              <div>
                <InputField
                  fieldId="passwordConfirmation"
                  fieldName="Password Confirmation"
                  fieldType="password"
                  ref="passwordConfirmation" />
              </div>
              <div className="text--center">
                <Button name="Sign Up" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Signup);
