"use strict";

const ListItem = ({ user }) => {
  const { avatar, name, product } = user;

  return (
    <li className="mdl-list__item-two-line">
      <span className="mdl-list__item-avatar">{avatar}</span>
      <span className="mdl-list__item-primary-content">{name}</span>
      <span className="mdl-list__item-secondary-content">{product}</span>
    </li>
  );
};

export default ListItem
