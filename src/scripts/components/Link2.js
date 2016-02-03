"use strict";
import { connect } from "react-redux";
import { goTo } from "../actions/router_actions";

const Link = ({ children, route, param, styles, dispatch }) => (
  <a href="#!"
    className={styles}
    onClick={ev => {
      ev.preventDefault();
      dispatch(goTo(route, param));
    }}
  >
    {children}
  </a>
);

export default connect()(Link)
