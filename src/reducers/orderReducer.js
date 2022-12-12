import { ADD_ORDER, INIT_ORDER } from "../actions/orderActions";

const orderReducer = (state=null, actions) => {
  switch (actions.type) {
    case INIT_ORDER:
      return actions.data
    case ADD_ORDER:
      return actions.data
    default:
      return state;
  }
}

export default orderReducer