import { hideRegistrationForm } from './hideForm.js'
import { addUser } from './newUser.js'
import { setUserName } from './chekInput/userName.js'
import { setMail } from './chekInput/mail.js'
import { setPassword, validationPassword } from './chekInput/passwords.js'
import { checkClick } from './chekInput/checkbox.js'


export const handlerEvent = () => {
  btnClose.addEventListener('click', hideRegistrationForm)
  buttonSignUp.addEventListener('click', addUser)
  inputUserName.addEventListener('change', setUserName)
  inputMailRegistration.addEventListener('change', setMail)
  inputPasswordRegistrationOne.addEventListener('input', validationPassword)
  inputPasswordRegistrationTwo.addEventListener('input', validationPassword)
  inputPasswordRegistrationTwo.addEventListener('change', setPassword)
  castomCheckBox.addEventListener('click', checkClick)
}