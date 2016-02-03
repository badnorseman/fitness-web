"use strict";
import UserDialog from "./UserDialog";

const UserListItem = ({ user }) => {
  const { avatar, name, product } = user;
  const styles = {
    avatar: {
      height: "32px",
      width: "32px"
    }
  };

  return (
    <li className="mdl-list__item mdl-list__item--three-line">
      <span className="mdl-list__item-primary-content">
        <span>
          <img src={avatar} alt="" style={styles.avatar} />
        </span>
        <span>{name}</span>
        <span className="mdl-list__item-text-body">{name}</span>
      </span>
      <span className="mdl-list__item-secondary-content">
        <span className="mdl-list__item-secondary-action">
          <button id="user-dialog--open" type="button"
            className="mdl-button mdl-js-button mdl-button--icon">
            <i className="material-icons">star</i>
          </button>
          <UserDialog user={user} />
        </span>
      </span>
    </li>
  );
};

export default UserListItem
