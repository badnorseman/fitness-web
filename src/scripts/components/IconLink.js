"use strict";
import { connect } from "react-redux";
import { changeRoute } from "../actions/router_actions";

const IconLink = ({
  name,
  route,
  onClick
}) => (
  <a href="#!"
    className="mdl-navigation__link"
    onClick={ev => {
      ev.preventDefault();
      onClick(route);
    }}
  >
    <i className="material-icons">{name}</i>
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
)(IconLink)
