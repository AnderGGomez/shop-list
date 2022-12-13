import productService from "../services/products"

export const NEW_CART = 'NEW_CART'
export const INIT_CART = 'INIT_CART'
export const UPDATE_CART = 'UPDATE_CART'

export const initializeCart = () => {
  return async dispatch => {
    const products = await productService.getAll()
    dispatch({
      type: INIT_CART,
      data: products
    })
  }
}


export const updateCart = (productObj) => {
  return dispatch => {
    dispatch({
      type: UPDATE_CART,
      data: productObj
    })
  }
}
