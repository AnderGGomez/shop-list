import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import loginReducer from "./reducers/loginReducer";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";
import orderReducer from "./reducers/orderReducer";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist'
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login']
}
const rootReducer = combineReducers({
  products: productReducer, 
  cart: cartReducer,
  login: loginReducer,
  order: orderReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})


export const  persistor = persistStore(store)