"use strict";
import { connect } from "react-redux";
import { goTo } from "../../actions/router_actions";
import ListItem from "./ListItem";
import Login2 from "./Login2";
import "./list.css";

const List = ({ users, dispatch }) => {
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
      <hr />
      <Login2 />
      <a className="mdl-navigation__link"
        onClick={ev => {
          ev.preventDefault();
          dispatch(goTo("LOGIN3"));
        }}
      >
        Log in (not working)
      </a>
      <hr />
      <ul className="mdl-list">
        {items}
      </ul>
      <hr />
    </div>
  );
};

export default connect()(List)
