"use strict";
import React, { Component, PropTypes } from "react";

export default class ProductGridTile extends Component {
  static propTypes = {
    tile: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this._handleSelect = this._handleSelect.bind(this);
  }

  _handleSelect() {
    this.props.onSelect(this.props.tile);
  }

  render() {
    const { tile } = this.props;
    const { currency, image, name, price } = tile;
    const style = {
      backgroundImage: "url(" + image + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: 160,
      WebkitTransition: "all",
      msTransition: "all"
    };

    return (
      <a onClick={this._handleSelect} href="#!">
        <div className="mdl-cell mdl-cell--6-col-phone mdl-cell--4-col-tablet mdl-cell--3-col-desktop">
          <div className="mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title" style={style}>
            </div>
            <div className="mdl-card__supporting-text">
              <h5>{name}</h5>
              <h6>{currency} {price}</h6>
            </div>
          </div>
        </div>
      </a>
    )
  }
}
