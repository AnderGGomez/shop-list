import { INIT_INVENTORY, NEW_PRODUCT, UPDATE_PRODUCT, UPDATE_INVENTORY } from "../actions/inventoryActions";

const initialState = {
  products: [],
  user: null,
  id: null,
}
const inventoryReducer = (state=initialState, actions) => {
  switch (actions.type) {
    case INIT_INVENTORY:
      return actions.data
    case NEW_PRODUCT:
      const updateProducts = state.products.concat(actions.data)
      return {...state, products: updateProducts}
    case UPDATE_PRODUCT:
      const updateProduct = state.products.map(product => product.productID !== actions.data.productID ? product : actions.data)
      return {...state, products: updateProduct}
    case UPDATE_INVENTORY:
      return actions.data
    default:
      return state
  }
}



export default inventoryReducer