"use strict";

const UserListItem = ({ user }) => {
  const { avatar, name, product } = user;

  return (
    <li className="mdl-list__item mdl-list__item--three-line">
      <span className="mdl-list__item-primary-content">
        <img className="mdl-list__item-avatar" src={avatar} alt="" />
        <span>{name}</span>
        <span className="mdl-list__item-text-body">{name}</span>
      </span>
    </li>
  );
};

export default UserListItem
