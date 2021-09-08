import { getDomElement } from "../utils/utilsFunc.js"
import { temperatureKelvin, weatherPrecipitation, weatherStatus } from "./request.js"

const iconWeather = getDomElement('.weather-icon')
const descriptionTemperoture = getDomElement('.temperature__description')
const cityName = getDomElement('.current-city__name')
const temperatureValue = getDomElement('.temperature__value')
const temperatureUnitsSymbol = getDomElement('.temperature__units-symbol')


export const setWeatherData = () => {
  iconWeather.innerHTML = `<img src="${weatherStatus.icon}" alt="${weatherStatus.description}">`
  cityName.innerHTML = `${weatherStatus.name}`
  temperatureValue.innerHTML = `${temperatureKelvin.temp}`
  temperatureUnitsSymbol.innerHTML = `&deg; <span>K</span>`

  descriptionTemperoture.innerHTML = `
    <p class="weather__params weather-clouds">
    clouds: ${weatherPrecipitation.clouds}
    </p>
    <p class="weather__params weather-humidity">
    humidity: ${weatherPrecipitation.humidity}
    </p>
    <p class="weather__params weather-pressure">
    pressure: ${weatherPrecipitation.pressure}
    </p>`
}