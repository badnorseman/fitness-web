"use strict";
import ListItem from "./ListItem";

const List = ({ users }) => {
  let items = [];
  for (let key in users) {
    if (users.hasOwnProperty(key)) {
      items.push(
        <ListItem key={key} user={users[key]}/>
      );
    }
  }

  return (
    <ul className="mdl-list">
      {items}
    </ul>
  );
};

export default List
