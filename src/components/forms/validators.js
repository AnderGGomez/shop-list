export const required = value => (value ? undefined : 'Required')
export const mustBeLetter = value => (!/^[a-zA-Z]+([a-zA-Z ]+)+$/ig.test(value)? 'Introduzca solo letras': undefined)
export const mustBeURL = value => (!/(?:http|https):\/\/(?:[^\/\r\n]+)(\/[^\r\n]*)?/gi.test(value) ? 'introduzca un url valido': undefined)
export const minLength = min => value =>
  (value.length <= min ? 'Demasiado corto' : undefined)

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)