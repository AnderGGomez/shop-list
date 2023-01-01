import styled from "styled-components";

export const CardWrapper = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-rows:100px 60px 30px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 0.75rem;
  background-color: #FFF;
  text-align: center;

  @media only screen and (max-width: 600px) {
    grid-template-rows:100px 80px 30px;
  }
  
  @media only screen and (max-width: 992px) {
    grid-template-rows:100px 60px 30px;
  }

`
export const CardTextWrapper = styled.div`
  grid-area: text;
  background-color: ${props => props.theme.first_color};
`
export const CardStatWrapper = styled.div`
  grid-area: stats;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  background-color: ${props => props.theme.third_color};
  border-bottom-left-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
`
export const CardImage = styled.div`
  grid-area:image;
  background-image: url(${(props => props.background)});
  background-color: ${props => props.theme.third_color};
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  /*background-size: cover;*/
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

export const CardTextTitle = styled.h2`
margin: 0em;
font-size: 2rem;
box-sizing: border-box;
min-width: 0px;
line-height: 1.2;
background-clip: text;
-webkit-background-clip: text;
color: #000;

@media only screen and (max-width: 600px) {
  font-size: 0.75rem;
}

@media only screen and (max-width: 992px) {
  font-size: 1.25rem;
}

`

export const CardTextDetails = styled.span`
  color: #000;
  font-size: 1rem;
  margin: 0em;

  @media only screen and (max-width: 600px) {
    font-size: 0.5rem;
  }
  
  @media only screen and (max-width: 992px) {
    font-size: 0.75rem;
  }
`
export const CardStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.25em;
`

export const ButtonMath = styled.button`
    border-radius: 0.35em;
    width:80%;
    height: 100%;
    border: 1px solid ${props => props.theme.third_color};
    background-color: ${props => props.theme.fourth_color};
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }

    &:disabled {
      background-color: #A5A5A5;
    }
`


export const InputNumber = styled.input`
  text-align: center;
  width: 80%;
  height: 100%;
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