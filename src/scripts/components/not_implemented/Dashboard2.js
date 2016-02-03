"use strict";
import { connect } from "react-redux";
import Login from "./Login2";
import UserList from "./UserList2";

const Dashboard = ({ products, users, goTo }) => (
  <div className="mdl-grid">
    <div className="mdl-cell mdl-cell--12-col">
      <h3>Dashboard 2</h3>
      <Login />
      <a className="mdl-navigation__link"
        onClick={ev => {
          ev.preventDefault();
          goTo("LOGIN3");
        }}
      >
        Log in (not working)
      </a>
      <hr />
      <UserList users={users} />
    </div>
  </div>
);

const getProductsByCoach = (coach, products) => {
  let productsByCoach = {};
  coach.products.forEach(el => {
    if (products[el.id]) {
      productsByCoach[el.id] = products[el.id];
    }
  })
  return productsByCoach;
};

const mapStateToProps = (state) => {
  return {
    products: getProductsByCoach(
      state.coach.coaches[state.auth.currentUser.id],
      state.product.products),
    users: state.user.users
  };
};

export default connect(mapStateToProps)(Dashboard)
