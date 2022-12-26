import { INIT_LOGIN, LOGIN, LOGOUT } from "../actions/loginActions";

const initialState = {
  token : null,
  groupName: null,
  username: null
}
const loginReducer = (state=initialState, actions) => {
  switch (actions.type) {
    case INIT_LOGIN:
      console.log(actions)
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