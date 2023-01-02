import React from 'react'
import { Form, Field } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../actions/inventoryActions'
import { FieldDiv } from '../Estilos/estilos'
import { ButtonForm, FormInput, FormInputWrapper, FormLabel, FormOptions, FormSubmitWrapper, FormTop, FormWrapper, SubmitButton } from '../Estilos/Product/ProductStyle'
import { required, mustBeLetter, mustBeURL, minLength, composeValidators } from './validators'


const ProducForm = () => {
  const dispatch = useDispatch()
  const inventory = useSelector(state => state.inventory)
  const user = useSelector(state => state.login)
  const minLength3 = minLength(3)
  const minLength2 = minLength(2)
  const minLength22 = minLength(22)

  const onSubmit = (values, form) => {
    dispatch(addProduct(values, inventory.id, user.token))
    form.restart()
  }


  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values, invalid }) => (
          
            
            <form onSubmit={handleSubmit}>
            <FormWrapper>
            <FormTop background={'https://cdn-icons-png.flaticon.com/512/9304/9304445.png'}></FormTop>
              <FormInputWrapper>
                <Field name="name" validate={composeValidators(required, mustBeLetter, minLength3)}>
                  {({ input, meta }) => (
                    <FieldDiv>
                      <FormLabel> Nombre: </FormLabel>
                      <FormInput {...input} type="text" placeholder="Nombre del producto" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </FieldDiv>
                  )}
                </Field>
                <Field name="url" validate={composeValidators(required, mustBeURL, minLength22)}>
                  {({ input, meta }) => (
                    <FieldDiv>
                      <FormLabel>URL:</FormLabel>
                      <FormInput {...input} type="text" placeholder="URL imagen" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </FieldDiv>
                  )}
                </Field>
                <Field name='unidad' validate={composeValidators(required, minLength2)}>
                  {({ input, meta }) => (
                    <FieldDiv>
                      <FormLabel>Unidad:</FormLabel>
                      <FormInput {...input} type="text" placeholder='Presentacion del producto' />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </FieldDiv>
                  )}
                </Field>
              </FormInputWrapper>
              <FormSubmitWrapper>
                <FormOptions>
                  <ButtonForm type="submit" disabled={submitting | invalid}>
                    Crear
                  </ButtonForm>
                </FormOptions>
                <FormOptions>
                  <ButtonForm $mode='reset'
                    type="button"
                    onClick={form.reset}
                    disabled={submitting || pristine}
                  >
                    Reset
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

/**
 *  <Field
              name="unidad"
              validate={composeValidators(required)}
            >{({ input, meta }) => (
              <div>
                <label>Detalles</label>
                <select {...input} type="text">
                  <option />
                  <option value="X1">{values.productName} X1</option>
                  <option value="X2">{values.productName} X2</option>
                  <option value="X3">{values.productName} X3</option>
                  <option value="X6">{values.productName} X6</option>
                  <option value="X12">{values.productName} X12</option>
                  <option value="X15">{values.productName} X15</option>
                  <option value="X30">{values.productName} X30</option>
                </select>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
            </Field>
 */



export default ProducForm
