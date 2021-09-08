import { getAllUsers } from './dataBase.js'

export const getUserByEmail = (mail) => {
  const users = getAllUsers()
  
  return (users) ? users.filter(item => item.mail === mail) : []
}

// export const isUserByEmail = () => {
//   const trueEmail = getUserByEmail()

//   return Boolean(trueEmail)
// }