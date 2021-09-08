import { getDomElement } from "../utils/utilsFunc.js"
import { temperatureKelvin, weatherStatus, weatherPrecipitation } from '../request/request.js'
import { showCard } from "./showCardWeather.js"

export { setDataCardWeather, cardWeatherContent, cardBtn }

const cardWeatherContent = getDomElement('.card-content')
const cardBtn = getDomElement('.card__button')
const cardTemperatureValues = getDomElement('.column-temperature-item__value', true)
const cardTemperatureNames = getDomElement('.column-temperature-item__name', true)
const cardWeatherValues = getDomElement('.column-weather-item__value', true)
const cardWeatherNames = getDomElement('.column-weather-item__name', true)
const cardIcons = getDomElement('.column-img', true)


const setDataCardWeather = () => {
  cardBtn.addEventListener('click', showCard)

  cardTemperatureValues.forEach((itemValue, index) => {
    itemValue.innerText = Object.values(temperatureKelvin)[index]
  })
  cardTemperatureNames.forEach((itemName, index) => {
    itemName.innerText = Object.keys(temperatureKelvin)[index]
  })
  cardWeatherValues.forEach((itemValue, index) => {
    itemValue.innerText = Object.values(weatherPrecipitation)[index]
  })
  cardWeatherNames.forEach((itemName, index) => {
    itemName.innerText = Object.keys(weatherPrecipitation)[index]
  })
  cardIcons.forEach(icon => {
    icon.innerHTML = `<img src="${weatherStatus.icon}" alt="${weatherStatus.description}"></img>`
  })
}