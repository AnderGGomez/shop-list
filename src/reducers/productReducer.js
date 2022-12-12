import { INIT_PRODUCTS, NEW_PRODUCT } from "../actions/productActions";


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



export default productReducer