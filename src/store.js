import { combineReducers } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./reducers/loginReducer";
import inventoryReducer from "./reducers/inventoryReducer";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist'
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login']
}
const rootReducer = combineReducers({
  inventory: inventoryReducer, 
  login: loginReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})


export const  persistor = persistStore(store)