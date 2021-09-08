import { deleteClasses } from '../utils/utilsFunc.js'
import { locationSection } from '../start/start.js'
import { cardWeatherContent } from "../cardWeather/setDataCardWeather.js"


export const removeUnnecessaryClasses = () => {
  const classListCardWeatherContent = Array.from(cardWeatherContent.classList)
  const classListLocationSection = Array.from(locationSection.classList)

  if (classListCardWeatherContent.includes('active')) {
    deleteClasses(cardWeatherContent, 'active')
  }
  if (classListLocationSection.includes('start')) {
    deleteClasses(locationSection, 'start')
  }
}