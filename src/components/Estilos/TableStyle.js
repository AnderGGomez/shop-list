import styled from "styled-components";

export const TableWrapper = styled.div`
  display: table;
  width: 100%;
  background-color: #FFF;
  border-collapse: collapse;
`
export const TableRow = styled.div`
  display: table-row;
  border: 1px solid ${props=>props.theme.first_color};
  font-weight: 300;
  border-radius: 1rem;
  background-color: #FFF;
`

export const TableCell = styled.div`
  display: table-cell;
  padding: 0.5rem;
  vertical-align: middle;
  ${(props) => {
    switch (props.$mode) {
      case 'img':
        return `
        width: 50px;
        `;
      case 'actions':
        return`
        width: 1rem;
        `
      default:
        return `
        width: 1fr;
        `
    }
  }}
`

export const TableHeaders = styled.div`
  display: table-header-group;
  font-weight: 400;
  color: #A7A7A7;
`

export const TableBody = styled.div`
  display: table-row-group;
`

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ActionsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Image = styled.img`
  width: 50px;
`

export const DataWrapper = styled.div`
  grid-area: data;
  display
`