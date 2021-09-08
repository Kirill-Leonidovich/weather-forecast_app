import { removeElement, addClasses } from '../../utils/utilsFunc.js'
import { locationSection } from '../../start/start.js'


export const hideRegistrationForm = () => {
  removeElement('.registration', 'show')

  if (!document.querySelector('.current-city__name').innerText) {
    addClasses(locationSection, 'start')
  }
}