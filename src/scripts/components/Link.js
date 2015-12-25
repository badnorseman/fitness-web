"use strict";
import { connect } from "react-redux";
import { changeRoute } from "../actions/router_actions";

const Link = ({
  name,
  route,
  styles,
  onClick
}) => (
  <a href="#!"
    className={styles}
    onClick={ev => {
      ev.preventDefault();
      onClick(route);
    }}
  >
    {name}
  </a>
);

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (route) => {
      dispatch(changeRoute(route));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Link)
