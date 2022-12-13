import { useDispatch } from "react-redux";
import ProducForm from "./components/forms/ProductForm";
import LoginForm from "./components/forms/loginForm";
import { logoutUser } from "./actions/loginActions";
import Cart from "./components/Cart/Cart";
import Order from "./components/Order/Order";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";

const App = () => {
  const dispatch = useDispatch()

  /*
  useEffect(() => {
    dispatch(initializeUser())
  }, [dispatch])*/

  const logout = () => {
    dispatch(logoutUser())
  }
  const padding = {
    padding:'1em'
  }
  return (
    <div>
      <Link style={padding} to='/product'>Product</Link>
      <Link style={padding} to='/cart'>Carrito</Link>
      <Link style={padding} to='/orders'>Ordenes</Link>
      <button onClick={()=>{logout()}}>logout</button>
      <Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/product' element={
          <ProtectedRoutes>
            <ProducForm />
          </ProtectedRoutes>
        }/>
        <Route path='/cart' element={
          <ProtectedRoutes>
            <Cart />
          </ProtectedRoutes>
        }/>
        <Route path='/' element={<Navigate to='/cart' />}/>
      </Routes>
    </div>

  )
}
/**
 *       
 */
export default App;
