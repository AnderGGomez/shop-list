import { INIT_PRODUCTS, NEW_PRODUCT } from "../actions/productActions";
import productServices from "../services/products";

const productReducer = (state=[], actions) => {
  switch (actions.type) {
    case INIT_PRODUCTS:
      return actions.data
    case NEW_PRODUCT:
      return [...state, actions.data]
    default:
      return state
  }
}


export const initializeProducts = () => {
  return async dispatch => {
    const products = await productServices.getAll()
    dispatch({
      type:INIT_PRODUCTS,
      data: products
    })
  } 
}

export const addProduct = (productObj) => {
  return async dispatch => {
    const productSaved = await productServices.create(productObj)
    dispatch({
      type: NEW_PRODUCT,
      data: productSaved
    })
  }
}


export default productReducer