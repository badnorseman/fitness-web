"use strict";
import Link from "../Link";

const UserListMenu = ({ user }) => {
  const { id } = user;

  return (
    <div>
      <button id={`user-list-menu${id}`}
        className="mdl-button mdl-js-button mdl-button--icon">
        <i className="zmdi zmdi-more-vert"></i>
      </button>
      <ul htmlFor={`user-list-menu${id}`}
        className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect">
        <li>
          <Link route="SHOWUSER" param={user} styles="mdl-menu__item">
            Show
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserListMenu
