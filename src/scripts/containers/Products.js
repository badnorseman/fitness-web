import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { changeRoute } from "../actions/routeActions";
import * as productActions from "../actions/productActions";
import Products from "../components/products";

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, { changeRoute }, productActions), dispatch);
}

function mapStateToProps(state) {
  const { productReducer, routeReducer } = state;
  const { isFetching, products } = productReducer;
  const { id, route } = routeReducer;
  return { id, isFetching, products, route };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
