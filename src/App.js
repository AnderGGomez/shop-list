import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProducForm from "./components/forms/ProductForm";
import ProductList from "./components/Products/ProductList";
import { initializeProducts } from "./reducers/productReducer";

const  App = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(initializeProducts())
  },[dispatch])


  return (
   <div>
    <ProductList />
    <ProducForm />
   </div>
  )
}

export default App;
