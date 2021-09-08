import { showError } from '../error/error.js'
import { loader } from '../UI/loader.js'
import { setDataCardWeather } from "../cardWeather/setDataCardWeather.js"
import { setWeatherData } from "./setWeatherData.js"
import { removeUnnecessaryClasses } from './checkNewRequest.js'
import { setData } from './setDate.js'

export { getServerData, temperatureKelvin, weatherStatus, weatherPrecipitation }

let temperatureKelvin
let weatherStatus
let weatherPrecipitation


const getServerData = async (city, index = 0) => {
  try {
    loader()
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=a3a7130ea17c893be3156af5ea46ff1c`)
    const weatherData = await response.json()

    if (await weatherData.cod > 399) {
      loader(stop)

      let descr = `
        Server problems, or incorrectly specified region!
        You definitely wanted to find - ${city}?`

      return showError(descr)
    }

    [temperatureKelvin, weatherStatus, weatherPrecipitation] = setData(weatherData, index)

    removeUnnecessaryClasses()
    setWeatherData()
    setDataCardWeather()
  }
  catch (error) {
    console.error(error)
    return showError(`Error: ${error}`)
  }
  finally {
    loader(stop)
  }
}