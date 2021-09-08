import { disabledBtn } from './btnSignUp.js'
import { credentials } from '../newUser.js'
import { thisNoValid, thisValid } from '../../general/validator.js'


export const setPassword = (event) => {
  const input = event.target

  mismatch(input)
  disabledBtn()
  credentials.password = input.value
}

export const validationPassword = (event) => {
  const input = event.target
  const inputContent = input.value.trim()

  if (inputContent.length < 5) return thisNoValid(input, 'Short password')
  if (!inputContent.match(/\d/)) return thisNoValid(input, 'Numbers must be present')
  if (inputContent.match(/\W/)) return thisNoValid(input, 'The password must not contain characters or space') /// дополнить

  return thisValid(input)
}

const mismatch = (input) => {
  if (input.value !== inputPasswordRegistrationOne.value) return thisNoValid(input, 'Password mismatch')

  thisValid(input)
}
