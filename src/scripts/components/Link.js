"use strict";

const Link = ({
  name,
  onClick
}) => (
  <a href="#!" className="mdl-navigation__link"
    onClick={ev => {
      ev.preventDefault();
      onClick();
    }}
  >
    {name}
  </a>
);

export default Link
