import { useDispatch, useSelector } from "react-redux";
import ProducForm from "./components/forms/ProductCreateForm";
import LoginForm from "./components/forms/loginForm";
import {logoutUser } from "./actions/loginActions";
import Inventory from "./components/Inventory/Inventory";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { initializeInventory } from "./actions/inventoryActions";
import { useEffect } from "react";
import ProductList from "./components/Products/ProductList";
import { GlobalStyle } from "./components/Estilos/estilos";
import Order from "./components/Orders/Order";
import ProductShop from "./components/Products/ProductShop";

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.login)
  useEffect(() => {
    dispatch(initializeInventory(user.token))
  }, [dispatch, user])
  
  const logout = () => {
    dispatch(logoutUser())
  }
  const padding = {
    padding:'1em'
  }
  return (
    <div>
      <GlobalStyle />
      <Link style={padding} to='/product/new'>Product</Link>
      <Link style={padding} to='/product/list'>Product List</Link>
      <Link style={padding} to='/product/shop'>Shop Product</Link>
      <Link style={padding} to='/inventory'>Inventario</Link>
      <Link style={padding} to='/order/list'>Order</Link>
      <button onClick={()=>{logout()}}>logout</button>
      <Routes>
        <Route path='/login' element={user.token ? <Navigate to='/' /> : <LoginForm />} />
        <Route path='/order/list' element={
          <ProtectedRoutes>
            <Order />
          </ProtectedRoutes>
        }/>
        <Route path='/product/shop' element={
          <ProtectedRoutes>
            <ProductShop />
          </ProtectedRoutes>
        }/>
        <Route path='/product/new' element={
          <ProtectedRoutes>
            <ProducForm />
          </ProtectedRoutes>
        }/>
        <Route path='/product/list' element={
          <ProtectedRoutes>
            <ProductList />
          </ProtectedRoutes>
        }/>
        <Route path='/inventory' element={
          <ProtectedRoutes>
            <Inventory />
          </ProtectedRoutes>
        }/>
        <Route path='/' element={<Navigate to='/inventory' />}/>
      </Routes>
    </div>

  )
}
export default App;
