import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProducForm from "./components/forms/ProductForm";
import ProductList from "./components/Products/ProductList";
import { initializeProducts } from "./actions/productActions";
import LoginForm from "./components/forms/loginForm";
import { initializeUser, logoutUser } from "./actions/loginActions";
import Cart from "./components/Cart/Cart";
import Order from "./components/Order/Order";

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.login)

  useEffect(() => {
    dispatch(initializeProducts())
    dispatch(initializeUser())
  }, [dispatch])

  const logout = () => {
    dispatch(logoutUser())
  }
  return (
    <div>

      {user ? (
        <div>
          <Order />
          <Cart />
          <ProducForm />
          <button onClick={()=>{logout()}}>logout</button>
        </div>
      ) : (<LoginForm />)}
    </div>
  )
}

export default App;
