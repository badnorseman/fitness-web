"use strict";
import ListItem from "./ListItem";
import "./list.css";

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
    <div>
      <ul className="mdl-list">
        {items}
      </ul>
    </div>
  );
};

export default List
