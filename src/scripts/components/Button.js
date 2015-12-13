"use strict";

const Button = ({
  name,
  type,
  onClick
}) => (
  <button
    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
    type={type}
    onClick={onClick}
  >
    {name}
  </button>
);

export default Button
