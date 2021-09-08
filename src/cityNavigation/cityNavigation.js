import { getServerData } from '../request/request.js'
import { showError } from '../error/error.js'
import { addClasses, deleteClasses } from '../utils/utilsFunc.js'
import { input, locationCurrentBtn } from "../start/start.js"


export const searchCityKeydownEnter = (event) => {
  if (event.code === 'Enter') {
    if (!input.value) {
      return showError('Enter city please!')
    }

    getServerData(input.value.trim())
    deleteClasses(locationCurrentBtn, 'active')
  }
}


export const searchCityInput = () => {
  if (!input.value) {
    return showError('Enter city please!')
  }

  getServerData(input.value.trim())
  deleteClasses(locationCurrentBtn, 'active')
}


export const navigationByRB = (event) => {
  if (event.target.tagName === 'A') {
    event.preventDefault()

    getServerData(event.target.textContent)
    deleteClasses(locationCurrentBtn, 'active')
  }
}


export const useCurrentPosition = () => {
  if (Array.from(locationCurrentBtn.classList).includes('active')) {
    return deleteClasses(locationCurrentBtn, 'active')
  }

  addClasses(locationCurrentBtn, 'active')

  navigator.geolocation.getCurrentPosition((position) => {
    getCityByCoord(position.coords.latitude, position.coords.longitude)
  })

  const getCityByCoord = async (lat, lon) => {
    try {
      const responseCoord = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a3a7130ea17c893be3156af5ea46ff1c`)
      const weatherDataCoord = await responseCoord.json()

      getServerData(weatherDataCoord.name)
    } catch (error) {
      return showError(`Error: ${error}`)
    }
  }
}