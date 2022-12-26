import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const ProtectedRoutes = ({ children }) => {
  const auth = useSelector(state => state.login)
  return auth.token ? children : <Navigate to='/login' />

}

export default ProtectedRoutes