import { addClasses, deleteClasses } from '../utils/utilsFunc.js'
import { cardWeatherContent, cardBtn } from '../cardWeather/setDataCardWeather.js'


export const showCard = () => {
  const classListCardWeatherContent = Array.from(cardWeatherContent.classList)

  if (classListCardWeatherContent.includes('active')) {
    cardBtn.textContent = 'more details...'
    return deleteClasses(cardWeatherContent, 'active')
  }

  cardBtn.textContent = 'hide details...'
  addClasses(cardWeatherContent, 'active')
}