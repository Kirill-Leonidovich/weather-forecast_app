import { getUniqueId } from '../general/id.js'
import { getCurrentUser } from '../general/checkUser.js'
import { Users } from '../general/classUser.js'
import { showError } from '../../error/error.js'

export const credentials = {
  userName: '',
  mail: '',
  password: '',
  id: null,
}

export const addUser = (event) => {
  event.preventDefault()
  const currentUser = getCurrentUser(credentials.mail, credentials.password)

  if (currentUser) {
    return showError('There is already a user with this mail and password, come up with another password!')
  }

  setOtherDataUser()
  registerUser()
}

const registerUser = () => {
  const currentUser = new Users(credentials)
  localStorage.setItem(credentials.id, JSON.stringify(credentials))
}

const setOtherDataUser = () => {
  credentials.id = getUniqueId()

  credentials.dateRegirtration = new Date().toJSON()
  if (inputPhone.value) {
    credentials.phone = inputPhone.value
  }
  if (inputDateofbirth.value) {
    credentials.dateofbirth = inputDateofbirth.value
  }
}