"use strict";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as productActions from '../actions/productActions';
import * as cartActions from '../actions/cartActions';
import { changeRoute } from '../actions/routeActions';
import { getClientToken } from '../actions/transactionActions';
import Products from '../components/products';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, { changeRoute }, { getClientToken }, cartActions, productActions), dispatch);
}

function mapStateToProps(state) {
  const { productReducer, routeReducer, transactionReducer } = state;
  const { clientToken } = transactionReducer;
  const { isFetching, products } = productReducer;
  const { id, route } = routeReducer;
  return { clientToken, id, isFetching, products, route };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
