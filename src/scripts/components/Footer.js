"use strict";
import { connect } from "react-redux";
import { changeRoute } from "../actions/router_actions";
import Link from "./Link";

const Footer = ({
  goToHelp,
  goToTerms
}) => (
  <footer className="mdl-mini-footer">
    <div className="mdl-mini-footer--left-section">
      <div className="mdl-logo">FitBird</div>
    </div>
    <div className="mdl-mini-footer--right-section">
      <ul className="mdl-mini-footer--link-list">
        <li><Link onClick={goToHelp}>Help</Link></li>
        <li><Link onClick={goToTerms}>Privacy & Terms</Link></li>
      </ul>
    </div>
  </footer>
);

const mapDispatchToProps = (dispatch) => {
  return {
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
