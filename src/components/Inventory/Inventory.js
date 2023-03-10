import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { productExpense } from "../../actions/inventoryActions"
import { CardImage, CardStats, CardStatWrapper, CardTextDetails, CardTextTitle, CardTextWrapper, CardWrapper, InputNumber, ButtonMath } from "../Estilos/Card/CardStyle"
import { Column, Row } from "../Estilos/estilos"
import Card from "./Card"


const Inventory = () => {
  const [products, setProduct] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const inventory = useSelector(state => state.inventory)
  const user = useSelector(state => state.login)

  useEffect(() => {
    setProduct(inventory.products.sort((a, b) => a.name < b.name ? 1 : -1))
  }, [inventory])

  inventory.products.sort((a, b) => a.name > b.name ? 1 : -1)

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
          <Column xs='6' md='4' lg='3' key={product.productID}>
            <Card
              product={product}
              InventoryEnable={inventory.setExpense}
              minus={minus}
              plus={plus}
              valueChange={valueChange}
            >
            </Card>
          </Column>
        ))}
      </Row>
      <button type="submit" onClick={() => { makeOrder() }} disabled={inventory.setExpense}>Ordernar</button>
    </div>
  )
}
//        <pre>{JSON.stringify(products.map(item => ({product: product.id, quantity: quantity, _id: _id})), 0, 2)}</pre>

export default Inventory

/**
 *             <CardWrapper>
              <CardImage background={product.url}></CardImage>
              <CardTextWrapper>
                <CardTextTitle>{product.name}</CardTextTitle>
                <CardTextDetails>{product.unidad}</CardTextDetails>
              </CardTextWrapper>
              <CardStatWrapper>
                <CardStats>
                  <ButtonMath onClick={() => { minus(product) }} disabled={inventory.setExpense}>-</ButtonMath>
                </CardStats>
                <CardStats>
                  <InputNumber id="quantity" type="number" value={product.quantity} onChange={(e) => valueChange(e, product)} min='0' max='100' />
                </CardStats>
                <CardStats>
                  <ButtonMath onClick={() => { plus(product) }} disabled={inventory.setExpense}>+</ButtonMath>
                </CardStats>
              </CardStatWrapper>
            </CardWrapper>

 */