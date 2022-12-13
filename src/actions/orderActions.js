import orderService from "../services/orders"

export const ADD_ORDER = 'ADD_ORDER'
export const INIT_ORDER = 'INIT_ORDER'

export const initializeOrder = (userId) => {
  return async dispatch => {
    const order = await orderService.getOrderUser(userId)
    dispatch({
      type:INIT_ORDER,
      data:order
    })
  }
}

export const addOrder = (order) => {
  return async dispatch => {
    const savedOrder = await orderService.create(order)
    dispatch({
      type:ADD_ORDER,
      data:savedOrder
    })
  }
} 
