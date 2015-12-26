"use strict";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/router_actions";
import Copyright from "./Copyright";
import Link from "../Link";

const Footer = ({
  goToAbout,
  goToHelp,
  goToTerms
}) => (
  <footer className="mdl-mini-footer">
    <div className="mdl-mini-footer--left-section">
      <ul className="mdl-mini-footer--link-list">
        <li><Link onClick={goToAbout}>About</Link></li>
        <li><Link onClick={goToHelp}>Help</Link></li>
        <li><Link onClick={goToTerms}>Privacy & Terms</Link></li>
      </ul>
    </div>
    <div className="mdl-mini-footer--right-section">
      <ul className="mdl-mini-footer--link-list">
        <li><Copyright /></li>
      </ul>
    </div>
  </footer>
);

const mapDispatchToProps = (dispatch) => {
  return {
    goToAbout: () => {
      dispatch(changeRoute("ABOUT"));
    },
    goToHelp: () => {
      dispatch(changeRoute("HELP"));
    },
    goToTerms: () => {
      dispatch(changeRoute("TERMS"));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Footer)
