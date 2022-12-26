import React from 'react'
import { Form, Field } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../actions/inventoryActions'
import { Button, FieldButtons, FieldDiv, FormDiv, Img, Input, Label } from '../Estilos/estilos'
import { required, mustBeLetter, mustBeURL, minLength, composeValidators } from './validators'


const ProducForm = () => {
  const dispatch = useDispatch()
  const inventory = useSelector(state => state.inventory)
  const user = useSelector(state => state.login)
  const minLength3 = minLength(3)
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
          <FormDiv>
            <form onSubmit={handleSubmit}>
              <Field name="name" validate={composeValidators(required, mustBeLetter, minLength3)}>
                {({ input, meta }) => (
                  <FieldDiv>
                    <Img src='https://cdn-icons-png.flaticon.com/512/4772/4772299.png' height='20px' width='20px' alt=''/>
                    <Label> Nombre: </Label>
                    <Input {...input} type="text" placeholder="Nombre del producto" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </FieldDiv>
                )}
              </Field>
              <Field name="url" validate={composeValidators(required, mustBeURL, minLength22)}>
                {({ input, meta }) => (
                  <FieldDiv>
                    <Img src='https://cdn-icons-png.flaticon.com/512/3214/3214679.png' height='20px' width='20px' alt=''/>
                    <Label>URL:</Label>
                    <Input {...input} type="text" placeholder="URL imagen" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </FieldDiv>
                )}
              </Field>
              <Field name='unidad' validate={composeValidators(required, minLength3)}>
                {({ input, meta }) => (
                  <FieldDiv>
                    <Img src='https://cdn-icons-png.flaticon.com/512/285/285917.png' height='20px' width='20px' alt=''/>
                    <Label>Unidad:</Label>
                    <Input {...input} type="text" placeholder='Presentacion del producto' />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </FieldDiv>
                )}
              </Field>
              <FieldDiv>
                <FieldButtons>
                <Button type="submit" disabled={submitting | invalid}>
                  Crear
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
