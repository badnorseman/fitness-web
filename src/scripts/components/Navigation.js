"use strict";
import { connect } from "react-redux";
import { changeRoute } from "../actions/router_actions";
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
    <nav className="mdl-navigation">
      {!isLoggedIn && <div className="mdl-layout--large-screen-only">
        <Link styles="mdl-navigation__link" onClick={() => goTo("LOGIN")}>
          Login
        </Link>
      </div>}
      {!isLoggedIn && <div className="mdl-layout--large-screen-only">
        <Link styles="mdl-navigation__link" onClick={() => goTo("SIGNUP")}>
          Sign up
        </Link>
      </div>}
      {coach && <div className="mdl-layout--large-screen-only">
        <Link styles="mdl-navigation__link" onClick={() => goTo("DASHBOARD")}>
          Dashboard
        </Link>
      </div>}
      {isLoggedIn && <div className="mdl-layout--large-screen-only">
        <div id="account-menu">
          <img className="layout__header-avatar" src={avatar} alt="" />
        </div>
        <ul
          className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
          htmlFor="account-menu">
          <li>
            <Link styles="mdl-menu__item" onClick={() => goTo("ACCOUNT")}>
              Account
            </Link>
          </li>
          <li className="mdl-menu__item" onClick={logout}>Log out</li>
        </ul>
      </div>}
      {!isLoggedIn && <div className="mdl-layout--small-screen-only">
        <Link styles="mdl-navigation__link" onClick={() => goTo("LOGIN")}>
          <i className="zmdi zmdi-lock-open zmdi-hc-lg"></i>
        </Link>
      </div>}
      {!isLoggedIn && <div className="mdl-layout--small-screen-only">
        <Link styles="mdl-navigation__link" onClick={() => goTo("SIGNUP")}>
          <i className="zmdi zmdi-mood zmdi-hc-lg"></i>
        </Link>
      </div>}
      {coach && <div className="mdl-layout--small-screen-only">
        <Link styles="mdl-navigation__link" onClick={() => goTo("DASHBOARD")}>
          <i className="zmdi zmdi-view-dashboard zmdi-hc-lg"></i>
        </Link>
      </div>}
      {isLoggedIn && <div className="mdl-layout--small-screen-only">
        <Link styles="mdl-navigation__link" onClick={() => goTo("ACCOUNT")}>
          <i className="zmdi zmdi-account-box zmdi-hc-lg"></i>
        </Link>
      </div>}
      {isLoggedIn && <div className="mdl-layout--small-screen-only">
        <Link styles="mdl-navigation__link" onClick={logout}>
          <i className="zmdi zmdi-lock zmdi-hc-lg"></i>
        </Link>
      </div>}
    </nav>
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
    goTo: (route) => {
      dispatch(changeRoute(route));
    },
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
