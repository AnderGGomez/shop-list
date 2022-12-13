import styled from "styled-components"

export const Container = styled.div`
margin: ${props => props.theme.margin};
padding: ${props => props.theme.padding};
border-radius: ${props => props.theme.radius}
`
export const ItemContainer = styled(Container)`
margin 0em;
background:${props => props.theme.first_color};
border: 2px solid ${props => props.theme.fourth_color};
`

export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 10px;
grid-auto-rows: minmax(50px, auto);
margin: ${props => props.theme.margin};
border: 2px solid #000000;
`

export const theme = {
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