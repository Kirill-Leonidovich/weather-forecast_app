import { getCurrentUser } from '../general/checkUser.js'
import { getUserByEmail, } from '../general/checkMail.js'
import { thisNoValid, thisValid } from '../general/validator.js'


export const isUserRegistered = (mail, pass) => {
  const possibleUser = getUserByEmail(mail)

  if (!possibleUser.length) {
    return thisNoValid(inputMailVerification, 'no user with such mail')
  }
  thisValid(inputMailVerification)

  if (!getCurrentUser(mail, pass)) {
    return thisNoValid(inputPasswordVerification, 'Invalid password')
  }
  thisValid(inputPasswordVerification)
}