import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import  orderService from '../../services/order'

const Order = () => {
  const inventory = useSelector(state => state.inventory)
  const token = useSelector(state => state.login.token)
  const [ order, setOrder ] = useState({})

  useEffect (()=>{
    async function fetchData (){
      const response = await orderService.getLatestOrder(token)
      setOrder(response)
    }
    fetchData()
  },[token])

  return (
    <div>
      {
        order.id ? 
        <div>
          <p>Order: {order.id}</p>
          <p>Creacion: {order.createdAt}</p>
          <ul>
            {order.products.map(product => (
              <li key={product.productID}>
                <p>Name: {product.name}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Unidad: {product.unidad}</p>
              </li>
            ))}
          </ul>
        </div>
        :<div>
          <span>No hay ordenes activas</span>
        </div>
      }
    </div>
  )
}


export default Order