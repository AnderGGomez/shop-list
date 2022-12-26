import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Montserrat', sans-serif;
  }
`

export const Container = styled.div`
margin: ${props => props.theme.margin};
padding: ${props => props.theme.padding};
border-radius: ${props => props.theme.radius}
`
export const ItemContainer = styled(Container)`
padding: 1em;
font-size: 0.75em;
font-weight: 500;
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
export const InputNumber = styled.input`
  width: 10%;
  text-align: center;
  border-radius: 0.35em;
  border: 1px solid ${props => props.theme.third_color};
    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }    
`;

export const ButtonMath = styled.button`
    border-radius: 0.35em;
    border: 1px solid ${props => props.theme.third_color};
    background-color: ${props => props.theme.first_color};
    width: 2em;
    margin-left: 0.5em;
    margin-right: 0.5em;

    &:hover {
      background-color: ${props => props.theme.third_color};
    }
`

export const Row = styled.div`
border: 1px solid blue;
    &::after{
      content: "";
      clear: both;
      display: table;
    }
`;

const getWidthString =(span) => {
  if(!span) return;
  let width = span / 12*100;
  return `width: ${width}%`
}
export const Column = styled.div`
  float: left;
    ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")};

    @media only screen and (min-width: 768px) {
      ${({ sm }) => sm && getWidthString(sm)};
    }

    @media only screen and (min-width: 992px) {
      ${({ md }) => md && getWidthString(md)};
    }

    @media only screen and (min-width: 1200px) {
      ${({ lg }) => lg && getWidthString(lg)};
    }
`;

export const FormDiv = styled.div`
    background-color: white;
    width: 40%;
    margin-top: 3rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: 0.75em;
    border: 1px solid #E7E7E7;
    box-shadow: 1px 1px 1px 1px #E7E7E7;

    @media screen and (max-width: 600px) {
      width: 80%;
      margin-top: 2rem;
  };
`
/**
 * @media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}
 */
export const FieldDiv = styled.div`
  /*border: 2px solid #FBEFEF;*/
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`
export const Label = styled.label`
  display: inline-block;
  width: 25%;
  margin-top: 1em;
  margin-bottom: 0.5em;
  color: #7C7C7C;
  font-weight: 500;
  @media screen and (max-width: 600px) {
      width: 70%;
  };
`
export const Input = styled.input`
  width: 60%;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  border-radius: 0.25rem;
  background-color: #E7E7E7;
  border: 0px solid;
  /*border: 1px solid red;*/
  height: 1.5rem;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #A09D9D;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    margin-top: 0;
};
`

export const Button = styled.button`
  border-radius: 0.35rem;
  margin: 1em;
  padding: 0.25em  1em;
  font-size: 1em;
  background-color: white;
  ${(props) => {
    switch (props.$mode) {
      case 'reset':
        return `
        border: 2px solid #EAA700;
        color: #EAA700;
        &:hover {
          background-color: #EAA700;
          color: white;
        }
        `;
      default:
        return `
        border: 2px solid #3458CA;
        color: #3458CA;
        &:hover {
          background-color: #3458CA;
          color: white;
        }
        `;
    }
  }}
`;
export const FieldButtons = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const Img = styled.img`
margin-left:0.25em;
margin-right: 0.25em;
`


export const theme = {
margin: '0.5em 2em 0.5em 2em',
padding: '0em 0.5em 0.5em 0.5em',
font_size: '1em',
radius: '0.5em',
//color
first_color: '#e0ebeb',
second_color: '#a7bcb9',
third_color: '#24527a',
fourth_color: '#5dacbd',
//text color
first_text_color: '#222831',
}