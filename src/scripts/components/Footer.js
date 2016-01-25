"use strict";
import Link from "./Link";

const Footer = ({ goTo }) => {
  const now = new Date();
  const currentYear = now.getFullYear();

  const styles = {
    main: {
      width: "60%"
    }
  };

  return (
    <footer className="mdl-mini-footer">
      <div className="mdl-grid" style={styles.main}>
        <div className="mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet mdl-cell--12-col-phone">
          <ul className="mdl-mini-footer__link-list">
            <li><Link onClick={() => goTo("ABOUT")}>About</Link></li>
            <li><Link onClick={() => goTo("HELP")}>Help</Link></li>
            <li><Link onClick={() => goTo("TERMS")}>Terms</Link></li>
          </ul>
        </div>
        <div className="mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet mdl-cell--12-col-phone">
          <ul className="mdl-mini-footer__link-list">
            <li><Facebook /></li>
            <li><Twitter /></li>
            <li><Instagram /></li>
            <li><Email /></li>
          </ul>
        </div>
        <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-phone">
          <div className="mdl-layout--small-screen-only">
            Copyright&nbsp;{currentYear}&nbsp;FitBird&nbsp;ApS
          </div>
          <div className="mdl-layout--large-screen-only">
            Copyright&nbsp;{currentYear}&nbsp;FitBird&nbsp;ApS.
            Esromgade&nbsp;15,&nbsp;Suite&nbsp;1102,&nbsp;Copenhagen&nbsp;2200,&nbsp;Denmark.
            CVR&nbsp;35418067
          </div>
        </div>
      </div>
    </footer>
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
    <Link onClick={() => onClick()}>
      <i className="zmdi zmdi-facebook-box zmdi-hc-2x"></i>
    </Link>
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

export default Footer
