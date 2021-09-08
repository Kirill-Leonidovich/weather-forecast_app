import { getUserByEmail, } from './checkMail.js'


export const getCurrentUser = (mail, pass) => {
  const possibleUser = getUserByEmail(mail)

  return (possibleUser) ? possibleUser
    .filter(item => item.password === pass)
    .reduce((res, item) => item, null) : null
}