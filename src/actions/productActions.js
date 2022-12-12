import productServices from "../services/products";
export const INIT_PRODUCTS= 'INIT_PRODUCTS'
export const NEW_PRODUCT = 'NEW_PRODUCT'


export const initializeProducts = () => {
  return async dispatch => {
    const products = await productServices.getAll()
    dispatch({
      type:INIT_PRODUCTS,
      data: products
    })
  } 
}

export const addProduct = (productObj) => {
  return async dispatch => {
    const productSaved = await productServices.create(productObj)
    dispatch({
      type: NEW_PRODUCT,
      data: productSaved
    })
  }
}

