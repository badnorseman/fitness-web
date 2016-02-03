"use strict";
import Dialog from "./Dialog";

const ListItem = ({ user }) => {
  const { avatar, name, product } = user;

  return (
    <li className="mdl-list__item mdl-list__item--three-line">
      <span className="mdl-list__item-primary-content">
        <span>
          <img className="list__avatar" src={avatar} alt="" />
        </span>
        <span>{name}</span>
        <span className="mdl-list__item-text-body">{name}</span>
      </span>
      <span className="mdl-list__item-secondary-content">
        <Dialog user={user} />
        <a className="mdl-list__item-secondary-action" href="#">
          <i className="material-icons">star</i>
        </a>
      </span>
    </li>
  );
};

export default ListItem
