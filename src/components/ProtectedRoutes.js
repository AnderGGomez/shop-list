import { useSelector } from "react-redux"
import { Navigate, Route } from "react-router-dom"

const ProtectedRoutes = ({ children }) => {
  const auth = useSelector(state => state.login)

  return auth ? children : <Navigate to='/login' />

}

export default ProtectedRoutes