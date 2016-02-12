"use strict";
import UserListMenu from "./UserListMenu";

const UserListItem = ({ user }) => {
  const { avatar, name } = user;

  return (
    <li className="mdl-list__item mdl-list__item--three-line">
      <span className="mdl-list__item-primary-content">
        <img className="mdl-list__item-avatar" src={avatar} alt="" />
        <span>{name}</span>
        <span className="mdl-list__item-text-body">{name}</span>
      </span>
      <span className="mdl-list__item-secondary-content">
        <span className="mdl-list__item-secondary-action">
          <UserListMenu user={user} />
        </span>
      </span>
    </li>
  );
};

export default UserListItem
