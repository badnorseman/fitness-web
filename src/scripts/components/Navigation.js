"use strict";
import { connect } from "react-redux";
import { changeRoute } from "../actions/router_actions";
import { logout } from "../actions/auth_actions";
import Link from "./Link";

const Navigation = ({
  currentUser,
  goToAccount,
  goToDashboard,
  goToLogin,
  goToSignup,
  logout
}) => {
  const { avatar, coach, email, id, name } = currentUser;
  const isLoggedIn = (id) ? true : false;

  return (
    <nav className="mdl-navigation">
      {!isLoggedIn && <div className="mdl-layout--large-screen-only">
        <Link styles="mdl-navigation__link" onClick={goToLogin}>
          Login
        </Link>
      </div>}
      {!isLoggedIn && <div className="mdl-layout--large-screen-only">
        <Link styles="mdl-navigation__link" onClick={goToSignup}>
          Sign up
        </Link>
      </div>}
      {coach && <div className="mdl-layout--large-screen-only">
        <Link styles="mdl-navigation__link" onClick={goToDashboard}>
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
            <Link styles="mdl-menu__item" onClick={goToAccount}>
              Account
            </Link>
          </li>
          <li className="mdl-menu__item" onClick={logout}>Log out</li>
        </ul>
      </div>}
      {!isLoggedIn && <div className="mdl-layout--small-screen-only">
        <Link styles="mdl-navigation__link" onClick={goToLogin}>
          <i className="material-icons">lock_open</i>
        </Link>
      </div>}
      {!isLoggedIn && <div className="mdl-layout--small-screen-only">
        <Link styles="mdl-navigation__link" onClick={goToSignup}>
          <i className="material-icons">mood</i>
        </Link>
      </div>}
      {coach && <div className="mdl-layout--small-screen-only">
        <Link styles="mdl-navigation__link" onClick={goToDashboard}>
          <i className="material-icons">dashboard</i>
        </Link>
      </div>}
      {isLoggedIn && <div className="mdl-layout--small-screen-only">
        <Link styles="mdl-navigation__link" onClick={goToAccount}>
          <i className="material-icons">account_circle</i>
        </Link>
      </div>}
      {isLoggedIn && <div className="mdl-layout--small-screen-only">
        <Link styles="mdl-navigation__link" onClick={logout}>
          <i className="material-icons">lock</i>
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
    goToAccount: () => {
      dispatch(changeRoute("ACCOUNT"));
    },
    goToDashboard: () => {
      dispatch(changeRoute("DASHBOARD"));
    },
    goToLogin: () => {
      dispatch(changeRoute("LOGIN"));
    },
    goToSignup: () => {
      dispatch(changeRoute("SIGNUP"));
    },
    changeRoute: (route) => {
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
