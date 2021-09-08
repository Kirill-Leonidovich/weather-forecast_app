import { getAllUserId } from './dataBase.js'


export const getUniqueId = () => {
  const newId = getNewId()
  const ids = getAllUserId()
  
  const isIdUnique = (ids) ? !Boolean(ids.filter(item => item === newId).length) : true
  
  return (isIdUnique) ? newId : getNewId()
}

const getNewId = () => {
  return +(Math.round(Math.random() * 1000) + String(Date.now()))
}