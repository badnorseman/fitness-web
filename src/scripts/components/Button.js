"use strict";

const Button = ({
  children,
  onClick
}) => (
  <button
    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button
