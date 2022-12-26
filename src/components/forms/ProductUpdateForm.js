import { Field, Form } from "react-final-form"
import { Button, FieldButtons, FieldDiv, FormDiv, Img, Input, Label } from "../Estilos/estilos"
import { composeValidators, minLength, mustBeLetter, mustBeURL, required } from "../forms/validators"

const ProductUpdateForm = ({ onSubmit, product }) => {
  const minLength3 = minLength(3)
  const minLength22 = minLength(22)
  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, invalid, values }) => (
          <FormDiv>
            <form onSubmit={handleSubmit}>
              <Field name="name" initialValue={product.name} validate={composeValidators(required, mustBeLetter, minLength3)}>
                {({ input, meta }) => (
                  <FieldDiv>
                    <Img src='https://cdn-icons-png.flaticon.com/512/3214/3214679.png' height='20px' width='20px' alt='' />
                    <Label >Nombre:</Label>
                    <Input id="name" {...input} type="text" placeholder="Nombre del producto" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </FieldDiv>
                )}
              </Field>
              <Field name="url" initialValue={product.url} validate={composeValidators(required, mustBeURL, minLength22)}>
                {({ input, meta }) => (
                  <FieldDiv>
                    <Img src='https://cdn-icons-png.flaticon.com/512/285/285917.png' height='20px' width='20px' alt='' />
                    <Label>URL:</Label>
                    <Input id="url" {...input} type="text" placeholder="URL imagen" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </FieldDiv>
                )}
              </Field>
              <Field name='unidad' initialValue={product.unidad} validate={composeValidators(required, minLength3)}>
                {({ input, meta }) => (
                  <FieldDiv>
                    <Img src='https://cdn-icons-png.flaticon.com/512/285/285917.png' height='20px' width='20px' alt='' />
                    <Label>Unidad:</Label>
                    <Input id="unidad" {...input} type="text" placeholder='presentacion del producto' />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </FieldDiv>
                )}
              </Field>
              <FieldDiv>
                <FieldButtons>
                  <Button type="submit" disabled={submitting | invalid}>
                    Editar
                  </Button>
                  <Button $mode='reset'
                    type="button"
                    onClick={form.reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
                </FieldButtons>
              </FieldDiv>
            </form>
          </FormDiv>
        )}
      />
    </div>
  )
}

export default ProductUpdateForm