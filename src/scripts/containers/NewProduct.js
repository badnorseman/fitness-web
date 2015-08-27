import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { createProduct } from "../actions/productActions";
import NewProduct from "../components/products/NewProduct";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createProduct }, dispatch);
}

function mapStateToProps(state) {
  return { state.productReducer.errors };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);
