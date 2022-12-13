import { UPDATE_CART, INIT_CART, NEW_CART } from "../actions/cartActions";

const cartReducer = (state=[], actions) => {
  switch (actions.type) {
    case INIT_CART:
      return actions.data
    case NEW_CART:
      return actions.data
    case UPDATE_CART:
      return state.map(product => product.id !== actions.data.id ? product : actions.data)
    default:
      return state;
  }
}


export default cartReducer