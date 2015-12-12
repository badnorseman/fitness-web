"use strict";
import { connect } from "react-redux";
import { changeRoute } from "../actions/route_actions";
import Dashboard from "../components/Dashboard";

const mapDispatchToProps = (
  dispatch
) => {
  return {
    onEdit: (product) => {
      dispatch(changeRoute("EDITPRODUCT", product));
    },
    onNew: () => {
      dispatch(changeRoute("NEWPRODUCT"));
    }
  };
};

const mapStateToProps = (
  state
) => {
  return {
    products: state.product.products,
    users: state.user.users
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
