"use strict";

const IconLink = ({
  name,
  onClick
}) => (
  <a href="#!" className="mdl-navigation__link"
    onClick={ev => {
      ev.preventDefault();
      onClick();
    }}
  >
    <i className="material-icons">{name}</i>
  </a>
);

export default IconLink
