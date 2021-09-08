import { getDomElement, createElement, removeElement, addClasses } from '../utils/utilsFunc.js'


export const loader = (stop) => {
  if (stop) {
    setTimeout(() => removeElement('.loader', 'show'), 500)
  }
  
  if (getDomElement('.loader')) return

  const spinner = `
    <div class="loader">
      <span class="loader-line"></span>
      <span class="loader-line"></span>
      <span class="loader-line"></span>
    </div>`

  createElement('.wrapper', spinner)
  
  setTimeout(() => addClasses('.loader', 'show'), 0)
}