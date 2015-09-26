"use strict";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createProduct } from '../actions/productActions';
import NewProduct from '../components/products/NewProduct';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createProduct }, dispatch);
}

export default connect(mapDispatchToProps)(NewProduct);
