"use strict";
import { connect } from "react-redux";
import { logout } from "../actions/auth_actions";
import Link from "./Link";

const Navigation = ({
  currentUser,
  goTo,
  logout
}) => {
  const { avatar, coach, email, id, name } = currentUser;
  const isLoggedIn = (id) ? true : false;

  return (
    <div>
      <nav className="mdl-navigation mdl-layout--large-screen-only">
        {!isLoggedIn && <Link styles="mdl-navigation__link"
          onClick={() => goTo("LOGIN")}>Log in</Link>}
        {!isLoggedIn && <Link styles="mdl-navigation__link"
          onClick={() => goTo("SIGNUP")}>Sign up</Link>}
        {coach && <Link styles="mdl-navigation__link"
          onClick={() => goTo("DASHBOARD")}>Dashboard</Link>}
        {isLoggedIn && <div>
          <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon"
            id="menu"><img className="layout__header-avatar" src={avatar} alt="" />
          </button>
          <ul className="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right"
            htmlFor="menu">
            <li><Link styles="mdl-menu__item"
              onClick={() => goTo("ACCOUNT")}>Account</Link></li>
            <li className="mdl-menu__item" onClick={logout}>Log out</li>
          </ul>
        </div>}
      </nav>
      <nav className="mdl-navigation mdl-layout--small-screen-only">
        <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon"
          id="menu">
          {isLoggedIn && <img className="layout__header-avatar" src={avatar} alt="" />}
          {!isLoggedIn && <i className="zmdi zmdi-more-vert zmdi-hc-lg"></i>}
        </button>
        <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
          htmlFor="menu">
          {coach && <li><Link styles="mdl-menu__item"
            onClick={() => goTo("DASHBOARD")}>Dashboard</Link></li>}
          {isLoggedIn && <li><Link styles="mdl-menu__item"
            onClick={() => goTo("ACCOUNT")}>Account</Link></li>}
          {isLoggedIn && <li className="mdl-menu__item" onClick={logout}>Log out</li>}
          {!isLoggedIn && <li><Link styles="mdl-menu__item"
            onClick={() => goTo("LOGIN")}>Log in</Link></li>}
          {!isLoggedIn && <li><Link styles="mdl-menu__item"
            onClick={() => goTo("SIGNUP")}>Sign up</Link></li>}
        </ul>
      </nav>
    </div>
  );
};

const logoutFacebook = () => {
  FB.getLoginStatus(response => {
    if (response.status === "connected") {
      FB.logout();
    };
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      logoutFacebook();
      dispatch(logout());
    }
  };
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)
