import styled from "styled-components"

export const FormWrapper = styled.div`
  background-color: #FFF;
  padding: 1rem;
  display: grid;
  grid-template-rows: 150px 1fr 50px;
  grid-template-areas: "top" "entradas" "botones";
  background-color: #FFF;
  width: 350px;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
`

export const FormTop = styled.div`
  grid-area: top;
  background-image: url(${props => props.background});
  background-color: ${props => props.theme.third_color};
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
`

export const FormInputWrapper = styled.div`
  grid-area: entradas;
  background-color: ${props => props.theme.second_color};
`

export const FormSubmitWrapper = styled.div`
  grid-area: botones;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  border-bottom-left-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
  height: 100%;
  background-color: ${props => props.theme.first_color};
`

export const FormOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.75rem;
`

export const FormLabel = styled.label`
  display: block;
  color: #7c7c7c;
  font-weight: 600;
  font-size: 0.75rem; 
`
export const FormInput = styled.input`
  display: block;
  margin-bottom: 0.5rem;
  width: 100%;
  background-color: #FFF;
  border: 1px solid ${props => props.theme.third_color};
  border-radius: 0.35rem;
  padding-left: 0.75rem;
  height: 2rem;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #A09D9D;
  }
  &:valid{
    background-color: white;
  }
`
export const ButtonForm = styled.button`
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 0.35rem;
  border-bottom-right-radius: 0.35rem;
        border: 1px solid ${props => props.theme.third_color};
        background-color: ${props => props.theme.fourth_color};
  cursor: pointer;
  ${(props) => {
    switch (props.$mode) {
      case 'reset':
        return `
        border: 1px solid #FF4C4C;
        background-color: #FF6C6C;
        `;
      default:
        return `
        border: 1px solid ${props => props.theme.third_color};
        background-color: ${props => props.theme.fourth_color};
        `;
    }
  }}

  &:hover {
    opacity: 0.5;
  }
  &:disabled {
    background-color: #A5A5A5;
    border: 1px solid #A5A5A5;
    cursor: default;
  }
`
