import productService from "../services/products"

export const NEW_CART = 'NEW_CART'
export const INIT_CART = 'INIT_CART'
export const INCREMENT = 'INCREMENT'

export const initializeCart = () => {
  return async dispatch => {
    const products = await productService.getAll()
    dispatch({
      type: INIT_CART,
      data: products
    })
  }
}


export const increment = (productObj) => {
  return dispatch => {
    dispatch({
      type: INCREMENT,
      data: productObj
    })
  }
}

export const decrement = (producObj) => {
  
}