"use strict";
import UserListItem from "./UserListItem2";

const UserList = ({ users }) => {
  let items = [];
  for (let key in users) {
    if (users.hasOwnProperty(key)) {
      items.push(
        <UserListItem key={key} user={users[key]}/>
      );
    }
  }

  return (
    <ul className="mdl-list">
      {items}
    </ul>
  );
};

export default UserList
