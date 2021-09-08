import { toggleClasses, deleteClasses, getDomElement } from '../utils/utilsFunc.js'

const temperatureUnitsSelect = getDomElement('.temperature__units-select')


export const toggleShowSelect = (event) => {
  let classListCurrentElement = Array.from(event.target.classList)

  if (classListCurrentElement.includes('temperature__units-symbol')) {
    toggleClasses(temperatureUnitsSelect, 'showSelect')
  }

  if (classListCurrentElement.includes('temperature__units-select__value')) {
    deleteClasses(temperatureUnitsSelect, 'showSelect')
  }
}