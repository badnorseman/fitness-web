"use strict";
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import Button from '../Button';
import InputField from '../InputField';
import Oauth from '../auth/Oauth';
import './Login.css';

class Login extends Component {
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

    if (email && password) {
      this.props.dispatch(login({
        auth_key: email,
        password: password
      }))
    };
  }

  render() {
    return (
      <div className="mdl-grid flex--center">
        <div className="mdl-cell mdl-cell--12-col">
          <div className="login mdl-card mdl-shadow--2dp">
            <div className="mdl-card__supporting-text mdl-card--border">
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
                      ref="email">
                    </InputField>
                  </div>
                  <div>
                    <InputField
                      fieldId="password"
                      fieldName="Password"
                      fieldType="password"
                      ref="password">
                    </InputField>
                  </div>
                  <div className="text--center">
                    <Button name="Log In" type="submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Login)
