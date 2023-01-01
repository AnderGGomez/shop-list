import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


const Product = ({inventoryProduct, purchasedProduct}) => {
  return (
    <div>
      <div>
        <p>Name: {inventoryProduct.name}</p>
        <p>Cantidad en Inventario: {inventoryProduct.quantity}</p>
        <p>Unidad: {inventoryProduct.unidad}</p>
      </div>
      <div>
        <p>Comprar: </p>
        <pre>{JSON.stringify(purchasedProduct, 0, 2)}</pre>
      </div>
      
    </div>
  )
}
const ProductShop = () => {
  const [purchasedProducts, setPurchased] = useState([])
  const inventoryProducts = useSelector(state => state.inventory.products)

  useEffect(()=>{
    setPurchased(inventoryProducts.map(product => ({...product, quantity: 0})))
  },[inventoryProducts])
  return (
    <div>
      {purchasedProducts.map((product, key) => (
        <Product key={product.productID} 
          inventoryProduct={inventoryProducts[key]}
          purchasedProduct= {product}
          />
      ))}
      
    </div>
  )
}

export default ProductShop