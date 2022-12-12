import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import loginReducer from "./reducers/loginReducer";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";
import orderReducer from "./reducers/orderReducer";

const reducer = combineReducers({
  products: productReducer, 
  cart: cartReducer,
  login: loginReducer,
  order: orderReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)


export default store