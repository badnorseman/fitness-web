"use strict";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeRoute } from '../actions/routeActions';
import { getProducts } from '../actions/productActions';
import { getClientToken } from '../actions/transactionActions';
import Products from '../components/products';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeRoute, getClientToken, getProducts }, dispatch);
}

function mapStateToProps(state) {
  const { productReducer, routeReducer, transactionReducer } = state;
  const { clientToken } = transactionReducer;
  const { isFetching, products } = productReducer;
  const { id, route } = routeReducer;
  return { clientToken, id, isFetching, products, route };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
