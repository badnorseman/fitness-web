"use strict";
import Link from "../Link";

const UserListMenu = ({ user }) => (
  <div>
    <button id={`user-list-menu${user.id}`}
      className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
      <i className="zmdi zmdi-more-vert"></i>
    </button>
    <ul htmlFor={`user-list-menu${user.id}`}
      className="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right">
      <li>
        <Link route="USERLIST" styles="mdl-menu__item">
          Edit
        </Link>
      </li>
    </ul>
  </div>
);

export default UserListMenu
