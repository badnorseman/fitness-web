"use strict";

const Button = ({
  children,
  styles,
  onClick
}) => (
  <button
    className={styles}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button
