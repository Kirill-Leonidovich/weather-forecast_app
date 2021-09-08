export const getAllUsers = () => {
  const users = Object.values(localStorage).map(user => JSON.parse(user))

  return (users.length) ? users : null
}


export const getAllUserId = () => {
  const ids = Object.keys(localStorage).map(id => id)
  
  return (ids.length) ? ids : null
}