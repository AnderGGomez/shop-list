import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { initializeCart, updateCart } from "../../actions/cartActions"
import { addOrder, initializeOrder } from "../../actions/orderActions"
import { Grid, ItemContainer } from "../Estilos/estilos"


const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const products = useSelector(state => state.cart)
  const user = useSelector(state => state.login)
  const order = useSelector(state => state.order)

  useEffect(() => {
    dispatch(initializeOrder(user.id))
    dispatch(initializeCart())
  }, [dispatch, user])

  const center = {
    'display': 'flex',
    'justifyContent': 'center'
  }
  const makeOrder = () => {
    const filterProducts = products.filter(product => product.quantity !== 0)
    const orderObj = {
      products: filterProducts,
      user: user.id
    }
    dispatch(addOrder(orderObj))
    navigate('/')

  }
  const setNewValue = (product, value) => {
    if(value <= 0 ){
      return product.quantity = 0
    }else{
      return product.quantity = value
    }
  }

  const plus = (product) => {
    const productObj = setNewValue(product, product.quantity+1)
    dispatch(updateCart(productObj))
  }

  const minus = (product) => {
    const producObj = setNewValue(product, product.quantity-1)
    dispatch(updateCart(producObj))
  }
  return (
    <div>
        <Grid>
          {products.map(product => (
            <ItemContainer key={product.id}>
              <div style={center}>
                {product.productName} - {product.details}
              </div>
              <div style={center}>
                <img src={product.url} alt="" height="47" width="47" />
              </div>
              <div style={center}>
                <button onClick={()=>{ minus(product) }}>-</button>
                {product.quantity}
                <button onClick={() => { plus(product) }}>+</button>
              </div>
            </ItemContainer>
          ))}
        </Grid>
        <button type="submit" onClick={() => { makeOrder() }}  disabled={order} >Ordernar</button>
    </div>
  )
}

export default Cart