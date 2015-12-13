"use strict";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeRoute } from "../actions/router_actions";
import Layout from "../components/Layout";

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeRoute
  }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    param: state.router.param,
    route: state.router.route
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
