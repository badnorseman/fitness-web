"use strict";
import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="mdl-mini-footer">
          <div className="mdl-mini-footer--left-section">
            <div className="mdl-logo">FitBird</div>
          </div>
          <div className="mdl-mini-footer--right-section">
            <ul className="mdl-mini-footer--link-list">
              <li><a href="#!">Help</a></li>
              <li><a href="#!">Privacy & Terms</a></li>
            </ul>
          </div>
        </footer>
      </div>
    )
  }
}
