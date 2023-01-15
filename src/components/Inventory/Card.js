import { ButtonMath, CardImage, CardStats, CardStatWrapper, CardTextDetails, CardTextTitle, CardTextWrapper, CardWrapper, InputNumber } from "../Estilos/Card/CardStyle";


const Card = ({ product, InventoryEnable, minus, plus, valueChange }) => {
  return (
    <CardWrapper>
      <CardImage background={product.url}></CardImage>
      <CardTextWrapper>
        <CardTextTitle>{product.name}</CardTextTitle>
        <CardTextDetails>{product.unidad}</CardTextDetails>
      </CardTextWrapper>
      <CardStatWrapper>
        <CardStats>
          <ButtonMath onClick={() => { minus(product) }} disabled={InventoryEnable}>-</ButtonMath>
        </CardStats>
        <CardStats>
          <InputNumber id="quantity" type="number" value={product.quantity} onChange={(e) => valueChange(e, product)} min='0' max='100' />
        </CardStats>
        <CardStats>
          <ButtonMath onClick={() => { plus(product) }} disabled={InventoryEnable}>+</ButtonMath>
        </CardStats>
      </CardStatWrapper>
    </CardWrapper>
  )
}

export default Card;