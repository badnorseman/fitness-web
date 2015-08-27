import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { createProduct } from "../actions/productActions";
import NewProduct from "../components/products/NewProduct";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createProduct }, dispatch);
}

function mapStateToProps(state) {
  const { productReducer } = state;
  const { errors } = productReducer;
  return { errors };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);
