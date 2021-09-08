import { getDomElement } from '../utils/utilsFunc.js'
import { temperatureKelvin } from '../request/request.js'

const allElementTemperoture = getDomElement('.temp', true)
const unitsSelectValues = getDomElement('.temperature__units-select__value', true)
const unitsSelectCurrentValue = getDomElement('.temperature__units-select-current__value')
const unitsSymbol = getDomElement('.temperature__units-symbol')


export const translationTemp = (event) => {
  let classListCurrentElement = Array.from(event.target.classList)

  if (!classListCurrentElement.includes('temperature__units-select__value')) {
    return
  }

  allElementTemperoture.forEach((tempElement) => {
    let classListTempElement = Array.from(tempElement.classList)
    let temperatureState = temperatureKelvin.temp

    if (classListTempElement.includes('max')) {
      temperatureState = temperatureKelvin.maxTemp
    }
    if (classListTempElement.includes('min')) {
      temperatureState = temperatureKelvin.minTemp
    }
    if (classListTempElement.includes('feelsLike')) {
      temperatureState = temperatureKelvin.feelsLike
    }

    unitsSelectValues.forEach((valueItem) => {
      if (valueItem === event.target) {
        unitsSelectCurrentValue.innerText = valueItem.innerText

        switch (valueItem.innerText) {
          case 'Celsius':
            tempElement.innerText = +(temperatureState - 273.15).toFixed(2)
            break
          case 'Fahrenheit':
            tempElement.innerText = +((temperatureState - 273.15) * (9 / 5) + 32).toFixed(2)
            break
          default:
            tempElement.innerText = temperatureState
            break
        }
      }
    })
  })

  unitsSymbol.innerHTML = `&deg; <span>${event.target.innerText[0]}</span>`
}