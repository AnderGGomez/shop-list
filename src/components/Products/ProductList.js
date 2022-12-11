import { useSelector } from "react-redux"

const ProductList = () => {
  const products = useSelector(state => state.products)

  return (
    <div>
      {products.map(product =>
        <div key={product.id}>
          <p>{product.productName}</p>
          <p>{product.details}</p>
          <img src={product.url} width="42" height="42" alt=''/>
        </div>)}
    </div>
  )
}

export default ProductList