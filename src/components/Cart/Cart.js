import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled, { ThemeProvider } from "styled-components"
import { increment, initializeCart } from "../../actions/cartActions"
import { addOrder } from "../../actions/orderActions"


const Container = styled.div`
  margin: ${props => props.theme.margin};
  padding: ${props => props.theme.padding};
  border-radius: ${props => props.theme.radius}
`
const ItemContainer = styled(Container)`
  margin 0em;
  background:${props => props.theme.first_color};
  border: 2px solid ${props => props.theme.fourth_color};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(50px, auto);
  margin: ${props => props.theme.margin};
  border: 2px solid #000000;

`
const theme = {
  margin: '0.5em 2em 0.5em 2em',
  padding: '0em 0.5em 0.5em 0.5em',
  font_size: '1em',
  radius: '0.5em',
  //color
  first_color: '#CBEDD5',
  second_color: '#97DECE',
  third_color: '#62B6B7',
  fourth_color: '#439A97',
  //text color
  first_text_color: '#222831',
}
const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.cart)
  const user = useSelector(state => state.login)
  
  useEffect(()=>{
    dispatch(initializeCart())
  },[dispatch])

  const center = {
    'display': 'flex',
    'justifyContent': 'center'
  }
  const makeOrder = () =>{
    const filterProducts = products.filter(product => product.quantity !== 0)
    const orderObj = {
      products: filterProducts,
      user: user.id
    }
    dispatch(addOrder(orderObj))
  }
  const plus = (product) => {
    const productObj = {
      ...product,
      quantity: product.quantity +1
    }
    dispatch(increment(productObj))
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
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
                <button>-</button>
                {product.quantity}
                <button onClick={()=>{plus(product)}}>+</button>
              </div>

            </ItemContainer>
          ))}
        </Grid>
        <button type="submit" onClick={()=>{makeOrder()}}>Ordernar</button>
      </ThemeProvider>
    </div>
  )
}

export default Cart