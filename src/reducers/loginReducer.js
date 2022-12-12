import { INIT_LOGIN, LOGIN, LOGOUT } from "../actions/loginActions";

const loginReducer = (state=null, actions) => {
  switch (actions.type) {
    case INIT_LOGIN:
      return actions.data
    case LOGIN:
      return actions.data
    case LOGOUT:
      return actions.data
    default:
      return state
  }
}

export default loginReducer