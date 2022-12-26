import inventoryServices from "../services/inventory";
import { LOGOUT } from "./loginActions";
export const INIT_INVENTORY = 'INIT_INVENTORY'
export const NEW_PRODUCT = 'NEW_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const UPDATE_INVENTORY = 'UPDATE_INVENTORY'

export const initializeInventory = (token) => {
  return async dispatch => {
    const inventory = await inventoryServices.getInventory(token)
    if (!inventory) {
      window.localStorage.removeItem('loggedShopListUser')
      dispatch({
        type: LOGOUT,
        data: {
          token : null,
          groupName: null,
          username: null
        }
      })
    } else {
      dispatch({
        type: INIT_INVENTORY,
        data: inventory
      })
    }

  }
}

export const addProduct = (productObj, inventoryId, token) => {
  return async dispatch => {
    const productSaved = await inventoryServices.addProduct(productObj, inventoryId, token)
    dispatch({
      type: NEW_PRODUCT,
      data: productSaved
    })
  }
}

export const productInfoUpdate = (productObj, inventoryId, token) => {
  return async dispatch => {
    const productUpdated = await inventoryServices.updateInfoProduct(productObj, inventoryId, token)
    dispatch({
      type: UPDATE_PRODUCT,
      data: productUpdated
    })
  }
}

export const productExpense = (products, inventoryId, token) => {
  return async dispatch => {
    const inventoryObj = await inventoryServices.updateInventory(products, inventoryId, token)
    dispatch({
      type: UPDATE_INVENTORY,
      data: inventoryObj
    })
  }
}

