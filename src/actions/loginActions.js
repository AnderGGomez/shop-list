import loginService from "../services/login"
export const INIT_LOGIN = 'INIT_LOGIN'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

const initialState = {
  token : null,
  groupName: null,
  username: null
}

export const initializeUser = () => {
  return dispatch => {
    const loggeUserJSON = window.localStorage.getItem('loggedShopListUser')
    if(loggeUserJSON){
      const user = JSON.parse(loggeUserJSON)
      dispatch({
        type: INIT_LOGIN,
        data: user
      })
    }else{
      dispatch({
        type: INIT_LOGIN,
        data: initialState
      })
    }
  }
}
export const loginUser = (credentials) => {
  return async dispatch => {
    const user = await loginService.login(credentials)
    window.localStorage.setItem('loggedShopListUser', JSON.stringify(user))
    dispatch({
      type: LOGIN,
      data: user
    })
  }
}

export const logoutUser = () => {
  return dispatch => {
    window.localStorage.removeItem('loggedShopListUser')
    dispatch({
      type: LOGOUT,
      data: initialState
    })
  }
}