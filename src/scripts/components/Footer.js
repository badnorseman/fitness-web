"use strict";
import Link from "./Link";

const Footer = ({ goTo }) => (
  <div>
    <FooterTop goTo={goTo} />
    <FooterBottom />
  </div>
);

const FooterTop = ({ goTo }) => (
  <footer className="mdl-mini-footer footer-top">
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
        <li><Link onClick={() => goTo("ABOUT")}>About</Link></li>
        <li><Link onClick={() => goTo("HELP")}>Help</Link></li>
        <li><Link onClick={() => goTo("TERMS")}>Terms</Link></li>
      </ul>
    </div>
  </footer>
);

const FooterBottom = () => {
  const now = new Date();
  const currentYear = now.getFullYear();

  return (
    <footer className="mdl-mini-footer footer-bottom">
      <div className="mdl-layout--small-screen-only">
        Copyright&nbsp;{currentYear}&nbsp;FitBird&nbsp;ApS
      </div>
      <div className="mdl-layout--large-screen-only">
        Copyright&nbsp;{currentYear}&nbsp;FitBird&nbsp;ApS.
        Esromgade&nbsp;15,&nbsp;Suite&nbsp;1102,&nbsp;Copenhagen&nbsp;2200,&nbsp;Denmark.
        CVR&nbsp;35418067
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
