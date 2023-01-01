import styled from "styled-components"

export const FormWrapper = styled.div`
  background-color: #FFF;
  padding: 1rem;
  display: grid;
  grid-template-rows: 150px 100px 100px;
  grid-template-areas: "top" "inputs" "submit";
  background-color: #FFF;
  width: 350px;
  margin: auto;
`

export const FormTop = styled.div`
  grid-area: top;
  background-image: url(${props => props.background});
  background-color: ${props => props.theme.third_color};
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid red;
`

export const FormInputWrapper = styled.div`
  grid-area: inputs;
  padding: 0.5rem;
  background-color: ${props => props.theme.first_color};
  border: 1px solid red;
`

export const FormSubmitWrapper = styled.div`
  grid-area: submit;
`

export const FormLabel = styled.label`
  display: block;
  color: #7c7c7c;
  font-weight: 600;
  font-size: 0.75rem;
`
export const FormInput  = styled.input`
  display: block;
  margin-top: 0.5rem;
  width: 100%;
  height: 2rem;
  background-color: #FFF;
  border: 1px solid ${props => props.theme.third_color};
  border-radius: 0.35rem;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #A09D9D;
    padding-left: 0.75rem;
  }
`
