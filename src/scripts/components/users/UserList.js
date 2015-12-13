"use strict";
import UserListItem from "./UserListItem";

const UserList = ({
  users
}) => {
  let items = (users) => {
    let items = [];
    for (let key in users) {
      if (users.hasOwnProperty(key)) {
        items.push(
          <UserListItem key={key} user={users[key]}/>
        );
      }
    }
    return items;
  }(users);

  const headerElementStyle = {
    margin: "0 10px 10px 0",
    maxWidth: "800px",
    width: "25%"
  };

  const listStyle = {
    padding: "50px 0 0 0"
  };

  return (
    <div className="block--center-horizontally__margin" style={listStyle}>
      <div className="block--center-horizontally__flex">
        <div style={headerElementStyle}>STATUS</div>
        <div style={headerElementStyle}>NAME</div>
        <div style={headerElementStyle}>PRODUCT</div>
        <div style={headerElementStyle}>CURRENT END DATE</div>
      </div>
      {items}
    </div>
  );
};

export default UserList;
