import React from 'react'
import { Form, Field } from 'react-final-form'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../actions/productActions'
import { required, mustBeLetter, mustBeURL, minLength, composeValidators } from './validators'


const ProducForm = () => {
  const dispatch = useDispatch()

  const minLength3 = minLength(3)
  const minLength22 = minLength(22)

  const onSubmit = (values, form) => {
    const productObj = {
      ...values,
      quantity: 0
    }
    dispatch(addProduct(productObj))
    form.restart()
  }

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="productName" validate={composeValidators(required, mustBeLetter, minLength3)}>
              {({ input, meta }) => (
                <div>
                  <label>Nombre del producto:</label>
                  <input {...input} type="text" placeholder="Nombre del producto" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="url" validate={composeValidators(required, mustBeURL, minLength22)}>
              {({ input, meta }) => (
                <div>
                  <label>URL:</label>
                  <input {...input} type="text" placeholder="URL imagen" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="details"
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
            <div className="buttons">
              <button type="submit" disabled={submitting}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
          </form>
        )}
      />
    </div>
  )
}



export default ProducForm
