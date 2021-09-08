import { input } from "../start/start.js"


export const getDomElement = (selector, all) => {
  if (all) {
    return document.querySelectorAll(selector)
  }

  return document.querySelector(selector)
}


export const createElement = (selector, value, position = 'beforeend') => {
  return getDomElement(selector).insertAdjacentHTML(position, value)
}


export const removeElement = (selector, deleteClass, delay = 500) => {
  if (!getDomElement(selector)) return

  deleteClasses(selector, deleteClass)

  setTimeout(() => {
    getDomElement(selector).remove()
  }, delay)
}


export const addClasses = (element, ...classAdd) => {
  if (typeof element === 'string') element = getDomElement(element)

  for (let i = 0; i < classAdd.length; i++) {
    element.classList.add(classAdd[i])
  }
}


export const toggleClasses = (element, ...classToggle) => {
  if (typeof element === 'string') element = getDomElement(element)

  for (let i = 0; i < classToggle.length; i++) {
    element.classList.toggle(classToggle[i])
  }
}


export const deleteClasses = (element, ...classRemove) => {
  if (input.value) input.value = null
  if (typeof element === 'string') element = getDomElement(element)

  for (let i = 0; i < classRemove.length; i++) {
    element.classList.remove(classRemove[i])
  }
}