"use strict";
import React, { Component, PropTypes } from 'react';
import { oauth } from '../../actions/authActions';
import Button from '../Button';

export default class Oauth extends Component {
  static propTypes = {
    provider: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    oauth(this.props.provider);
  }

  render() {
    return (
      <Button name={this.props.provider} type="button" onClick={this._handleClick} />
    )
  }
}
