import React from 'react'
import { Form, Field } from 'react-final-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../actions/loginActions'
import { required, minLength, composeValidators, validUserName, validPassword } from './validators'

const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const minLength3 = minLength(3)
  const minLength6 = minLength(6)

  const onSubmit = (values, form) => {
    dispatch(loginUser(values))
    form.restart()
    navigate('/')
  }

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, invalid, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name='username' validate={composeValidators(required, minLength3, validUserName)}>
              {({ input, meta }) => (
                <div>
                  <label>Nombre de usuario</label>
                  <input {...input} type='text' placeholder='min 4 caracteres' />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name='password' validate={composeValidators(required, minLength6, validPassword)}>
              {({ input, meta }) => (
                <div>
                  <label>Contraseña</label>
                  <input {...input} type='password' placeholder='contraseña' />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div className='buttons'>
              <button type='submit' disabled={submitting || invalid}>
                Submit
              </button>
              <button
                type='button'
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

export default LoginForm