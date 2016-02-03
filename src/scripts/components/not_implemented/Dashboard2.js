"use strict";
import { connect } from "react-redux";
import UserList from "./UserList2";

const Dashboard = ({ products, users, goTo }) => (
  <div className="mdl-grid content--width">
    <div className="mdl-cell mdl-cell--12-col">
      <h3>Dashboard</h3>
      <div>
        <button type="button"
          className="mdl-button mdl-js-button  mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
          onClick={ev => {
            ev.preventDefault();
            alert("Users");
          }}
        >
            Users
        </button>
      </div>
      <div>
        <UserList users={users} />
      </div>
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
