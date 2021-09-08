import { getCurrentUser } from '../general/checkUser.js'
import { isUserRegistered } from './checkVerification.js'
import { Users } from '../general/classUser.js'


export const entrance = () => {
  if (!getCurrentUser(inputMailVerification.value, inputPasswordVerification.value)) {
    return isUserRegistered(inputMailVerification.value, inputPasswordVerification.value)
  }

  const currentUser = new Users(getCurrentUser(inputMailVerification.value, inputPasswordVerification.value))
  event.preventDefault()
}