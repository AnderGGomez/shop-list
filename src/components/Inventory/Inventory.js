import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { productExpense } from "../../actions/inventoryActions"
import { ButtonMath, Column, InputNumber, ItemContainer, Row } from "../Estilos/estilos"


const Cart = () => {
  const [products, setProduct] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const inventory = useSelector(state => state.inventory)
  const user = useSelector(state => state.login)

  useEffect(() => {
    setProduct(inventory.products)
  }, [inventory])
  inventory.products.sort((a,b)=> a.name > b.name ? 1 : -1)
  const center = {
    'display': 'flex',
    'justifyContent': 'center'
  }
  const makeOrder = () => {
    dispatch(productExpense(products, inventory.id, user.token))
    navigate('/')
  }
  const setNewValue = (product, value) => {
    if (value <= 0) {
      product.quantity = 0
    } else {
      product.quantity = value
    }
    return product
  }

  const plus = (product) => {
    setProduct(products.map(p => p.name !== product.name ? p : setNewValue(product, product.quantity + 1)))
  }

  const minus = (product) => {
    setProduct(products.map(p => p.name !== product.name ? p : setNewValue(product, product.quantity - 1)))
  }

  const valueChange = (event, product) => {
    const value = Number(event.target.value)
    setProduct(products.map(p => p.name !== product.name ? p : setNewValue(product, value)))
  }
  return (
    <div>
      <Row>
        {products.map(product => (
          <Column xs='6' md='4' lg='3' key={product.name}>
            <ItemContainer>
              <div style={center}>
                {product.name} - {product.unidad}
              </div>
              <div style={center}>
                <img src={product.url} alt="" height="47" width="47" />
              </div>
              <div style={center}>
                <ButtonMath onClick={() => { minus(product) }}>-</ButtonMath>
                <InputNumber id="quantity" type="number" value={product.quantity} onChange={(e) => valueChange(e, product)} min='0' max='100' />
                <ButtonMath onClick={() => { plus(product) }}>+</ButtonMath>
              </div>
            </ItemContainer>

          </Column>
        ))}
      </Row>
      <button type="submit" onClick={() => { makeOrder() }} disabled={inventory.setExpense}>Ordernar</button>
    </div>
  )
}
//        <pre>{JSON.stringify(products.map(item => ({product: product.id, quantity: quantity, _id: _id})), 0, 2)}</pre>

export default Cart