import { ActionsWrapper, ButtonWrapper, Image, ImageWrapper, TableBody, TableCell, TableHeaders, TableRow, TableWrapper } from "../Estilos/TableStyle"


const Table = ({ products }) => {
  const estilo = {
    color: "#7C7C7C"
  }
  return (
    <TableWrapper>
      <TableHeaders>
        <TableCell $mode='img'>
          icon
        </TableCell>
        <TableCell>
          Nombre
        </TableCell>
        <TableCell>
          Unidad
        </TableCell>
        <TableCell>
          Cantidad
        </TableCell>
        <TableCell $mode='actions'>
          actions
        </TableCell>
      </TableHeaders>
      <TableBody>
        {products.map(product => (
          <TableRow key={product.productID}>
            <TableCell $mode='img'>
              <ImageWrapper>
                <Image src={product.url} alt={product.name}>
                </Image>
              </ImageWrapper>
            </TableCell>
            <TableCell>
              {product.name}
            </TableCell>
            <TableCell>
              {product.unidad}
            </TableCell>
            <TableCell>
              {product.quantity}
            </TableCell>
            <TableCell $mode='actions'>
              <ActionsWrapper>
                <ButtonWrapper>
                  <i className="material-icons" style={estilo}>
                    mode_edit
                  </i>
                </ButtonWrapper>
                <ButtonWrapper>
                  <i className="material-icons" style={estilo}>
                    delete_outline
                  </i>
                </ButtonWrapper>

              </ActionsWrapper>
            </TableCell>
          </TableRow>
        ))}

      </TableBody>
    </TableWrapper>
  )
}

/**      <ImageCell background={'https://cdn-icons-png.flaticon.com/512/847/847969.png'}></ImageCell>
 */
export default Table;