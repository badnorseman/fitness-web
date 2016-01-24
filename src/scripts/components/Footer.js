"use strict";
import Link from "./Link";

const Footer = ({ goTo }) => (
  <footer className="mdl-mega-footer">
    <FooterTop goTo={goTo} />
    <FooterBottom />
  </footer>
);

const FooterTop = ({ goTo }) => (
  <div className="mdl-mega-footer__top-section">
    <div className="mdl-mega-footer__left-section">
      <Facebook />
      <Twitter />
      <Instagram />
      <Email />
    </div>
    <div className="mdl-mega-footer__right-section">
      <Link onClick={() => goTo("ABOUT")}>About</Link>
      <Link onClick={() => goTo("HELP")}>Help</Link>
      <Link onClick={() => goTo("TERMS")}>Terms</Link>
    </div>
  </div>
);

const FooterBottom = () => {
  const now = new Date();
  const currentYear = now.getFullYear();

  return (
    <div className="mdl-mega-footer__bottom-section">
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
