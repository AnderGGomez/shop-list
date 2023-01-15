import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { productInfoUpdate } from "../../actions/inventoryActions"
import ProductUpdateForm from "../forms/ProductUpdateForm"
import Table from "./Table"




const Product = ({ product, dispatch, user, inventoryId, navigate}) => {
  const onSubmit = (values) => {
    const productObj = {
      productID: product.productID,
      quantity: product.quantity,
      ...values
    }

    dispatch(productInfoUpdate(productObj, inventoryId, user.token))
    navigate('.')
  }
  return (
    <div></div>
  )

  /*
  return (
    <ProductUpdateForm onSubmit={onSubmit} product={product}/>
  )*/
}

const ProductList = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const inventoryId = useSelector(state => state.inventory.id)
  const user = useSelector(state => state.login)
  const products = useSelector(state => state.inventory.products)

  return (
  <Table products={products}>
  </Table>
      
  )
}

/*
    {products.map(product =>
        <Product key={product.productID} product={product} dispatch={dispatch} user={user} inventoryId={inventoryId} navigate={navigate}/>
      )}
*/

export default ProductList