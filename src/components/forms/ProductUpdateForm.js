import { Field, Form } from "react-final-form"
import { FieldDiv } from "../Estilos/estilos"
import { composeValidators, minLength, mustBeLetter, mustBeURL, required } from "./validators"
import { ButtonForm, FormInput, FormInputWrapper, FormLabel, FormOptions, FormSubmitWrapper, FormTop, FormWrapper } from '../Estilos/Product/ProductFormStyle'
const ProductUpdateForm = ({ onSubmit, product }) => {
  const minLength3 = minLength(3)
  const minLength2 = minLength(2)
  const minLength22 = minLength(22)
  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, invalid, values }) => (
          <form onSubmit={handleSubmit}>
            <FormWrapper>
              <FormTop background={product.url}></FormTop>
              <FormInputWrapper>
                <Field name="name" initialValue={product.name} validate={composeValidators(required, mustBeLetter, minLength3)}>
                  {({ input, meta }) => (
                    <FieldDiv>
                      <FormLabel >Nombre:</FormLabel>
                      <FormInput id="name" {...input} type="text" placeholder="Nombre del producto" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </FieldDiv>
                  )}
                </Field>
                <Field name="url" initialValue={product.url} validate={composeValidators(required, mustBeURL, minLength22)}>
                {({ input, meta }) => (
                  <FieldDiv>
                    <FormLabel>URL:</FormLabel>
                    <FormInput id="url" {...input} type="text" placeholder="URL imagen" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </FieldDiv>
                )}
              </Field>
              <Field name='unidad' initialValue={product.unidad} validate={composeValidators(required, minLength2)}>
                {({ input, meta }) => (
                  <FieldDiv>
                    <FormLabel>Unidad:</FormLabel>
                    <FormInput id="unidad" {...input} type="text" placeholder='presentacion del producto' />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </FieldDiv>
                )}
              </Field>
              </FormInputWrapper>
              <FormSubmitWrapper>
                <FormOptions>
                  <ButtonForm type="submit" disabled={submitting | invalid}>
                    Editar
                  </ButtonForm>
                </FormOptions>
                <FormOptions>
                <ButtonForm $mode='reset'
                    type="button"
                    onClick={form.reset}
                    disabled={submitting || pristine}
                  >
                    Limpiar
                  </ButtonForm>
                </FormOptions>
              </FormSubmitWrapper>
            </FormWrapper>
          </form>
        )}
      />
    </div>
  )
}

export default ProductUpdateForm