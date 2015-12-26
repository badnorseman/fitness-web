"use strict";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/router_actions";
import Link from "../Link";

const Footer = ({
  goToAbout,
  goToHelp,
  goToTerms
}) => {
  const now = new Date();
  const currentYear = now.getFullYear();

  return (
    <footer className="mdl-mini-footer">
      <div className="mdl-mini-footer--left-section">
        <ul className="mdl-mini-footer--link-list">
          <li><Link onClick={goToAbout}>About</Link></li>
          <li><Link onClick={goToHelp}>Help</Link></li>
          <li><Link onClick={goToTerms}>Privacy & Terms</Link></li>
        </ul>
      </div>
      <div className="mdl-mini-footer--right-section">
        <p>
          Copyright&nbsp;&copy;&nbsp;2014-{currentYear}<br />
          FitBird&nbsp;ApS<br />
          Esromgade&nbsp;15&nbsp;&nbsp;Floor&nbsp;1&nbsp;&nbsp;Suite&nbsp;1102<br />
          2200&nbsp;Copenhagen&nbsp;N&nbsp;&nbsp;Denmark<br />
          CVR&nbsp;35418067
        </p>
      </div>
    </footer>
  );
};

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
