import { getAllUsers } from '../../general/dataBase.js'
import { disabledBtn } from './btnSignUp.js'
import { credentials } from '../newUser.js'
import { thisNoValid, thisValid } from '../../general/validator.js'


export const setUserName = (event) => {
  const input = event.target

  validationUserName(input)
  disabledBtn()
  credentials.userName = input.value
}

const isUniqueUserName = (userName) => {
  const users = getAllUsers()

  return (users) ? users
    .filter(names => names.userName === userName)
    .reduce(() => false, true) : true
}

const validationUserName = (input) => {
  const inputContent = input.value.trim()
  
  if (inputContent.length < 4) return thisNoValid(input, 'Name is too short')
  if (!isUniqueUserName(inputContent)) return thisNoValid(input, 'Name is taken')
  if (inputContent.match(/\W/)) return thisNoValid(input, 'The name must not contain characters or space') // исправить, чтобы можно было писать и на русском

  return thisValid(input)
}