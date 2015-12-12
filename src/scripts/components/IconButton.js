"use strict";

const IconButton = ({
  name,
  onClick
}) => (
  <button
    className="mdl-button mdl-js-button mdl-button--icon"
    onClick={onClick}
  >
    <i className="material-icons">{name}</i>
  </button>
);

export default IconButton;
