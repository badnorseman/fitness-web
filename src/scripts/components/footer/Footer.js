"use strict";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/router_actions";
import Link from "../Link";

const Footer = ({
  goToAbout,
  goToHelp,
  goToTerms
}) => (
  <div>
    <div className="mdl-mini-footer">
      <div className="mdl-mini-footer__left-section">
        <ul className="mdl-mini-footer__link-list">
          <li><Facebook /></li>
          <li><Twitter /></li>
          <li><Instagram /></li>
          <li><Email /></li>
        </ul>
      </div>
      <div className="mdl-mini-footer__right-section">
        <ul className="mdl-mini-footer__link-list">
          <li><Link onClick={goToAbout}>About</Link></li>
          <li><Link onClick={goToHelp}>Help</Link></li>
          <li><Link onClick={goToTerms}>Terms</Link></li>
        </ul>
      </div>
    </div>
    <Company />
  </div>
);

const Company = () => {
  const now = new Date();
  const currentYear = now.getFullYear();

  return (
    <div className="mdl-mini-footer">
      <span className="mdl-layout--small-screen-only block--center-horizontally__margin">
        Copyright&nbsp;{currentYear}&nbsp;FitBird&nbsp;ApS
      </span>
      <span className="mdl-layout--large-screen-only">
        Copyright&nbsp;{currentYear}&nbsp;FitBird&nbsp;ApS.
        Esromgade&nbsp;15,&nbsp;Suite&nbsp;1102,&nbsp;Copenhagen&nbsp;2200,&nbsp;Denmark.
        CVR&nbsp;35418067
      </span>
    </div>
  );
};

const Email = () => (
  <a href="mailto:hello@fitbird.com">
    <i className="zmdi zmdi-email zmdi-hc-2x"></i>
  </a>
);

const Facebook = () => {
  const onClick = () => {
    FB.ui({
      method: "share",
      href: "https://developers.facebook.com/docs/",
    }, function(response){});
  };

  return (
    <a href="#!"
      onClick={ev => {
        ev.preventDefault();
        onClick();
      }}
    >
      <i className="zmdi zmdi-facebook-box zmdi-hc-2x"></i>
    </a>
  );
};

const Instagram = () => (
  <a href="https://www.instagram.com/fitbirdinc/"
    target="_blank">
    <i className="zmdi zmdi-instagram zmdi-hc-2x"></i>
  </a>
);

const Twitter = () => (
  <a href="https://twitter.com/intent/tweet?via=fitbirdinc">
    <i className="zmdi zmdi-twitter zmdi-hc-2x"></i>
  </a>
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
