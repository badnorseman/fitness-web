import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { changeRoute } from "../actions/routeActions";
import * as productActions from "../actions/productActions";
import Products from "../components/products";

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, { changeRoute }, productActions), dispatch);
}

function mapStateToProps(state) {
  const { errorReducer, productReducer, routeReducer } = state;
  // const { errors } = errorReducer || { errors: [] };
  const { errors, isFetching, products } = productReducer;
  const { id, route } = routeReducer;
  return { errors, id, isFetching, products, route };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
