"use strict";

const Link = ({ children, styles, onClick }) => (
  <a href="#!"
    className={styles}
    onClick={ev => {
      ev.preventDefault();
      onClick();
    }}
  >
    {children}
  </a>
);

export default Link
