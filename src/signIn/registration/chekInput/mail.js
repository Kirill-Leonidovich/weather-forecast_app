import { disabledBtn } from './btnSignUp.js'
import { credentials } from '../newUser.js'
import { thisNoValid, thisValid } from '../../general/validator.js'


export const setMail = (event) => {
  const input = event.target

  validationMail(input)
  disabledBtn()
  credentials.mail = input.value
}


const validationMail = (input) => {
  const inputContent = input.value.trim()
  
  if (!inputContent.includes('@')) return thisNoValid(input, 'There must be an "@"')
  
  const [local, domain, ...noValidParams] = inputContent.split('@')
  const domainWord = domain.split('.')

  if (noValidParams.length) return thisNoValid(input, `@${noValidParams.join('').toUpperCase()} - it's too much`)
  if (!local) return thisNoValid(input, 'Specified local name')
  if (!domain) return thisNoValid(input, 'Specified domain name')
  if (domainWord.length !== 2) return thisNoValid(input, 'Domain name must be 2 words long')
  if (domain.match(/\d/)) return thisNoValid(input, 'There should be no numbers')

  return thisValid(input)
}