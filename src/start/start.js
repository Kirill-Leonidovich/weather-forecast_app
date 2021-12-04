import { getDomElement, addClasses } from '../utils/utilsFunc.js'
import { translationTemp } from '../temperature/translationTemperature.js'
import { toggleShowSelect } from '../temperature/showBodyUnitsTemperature.js'
import { timeNav } from '../timeAndData/timeNav.js'
import { setDataAndTime } from '../timeAndData/setDataAndTime.js'
import { showVerificationForm } from '../signIn/verification/showForm.js'
import { useCurrentPosition, searchCityKeydownEnter, searchCityInput, navigationByRB } from '../cityNavigation/cityNavigation.js'

export { start, locationCurrentBtn, input, locationSection, btnUser }

const temperature = getDomElement('.temperature')
const locationCurrentBtn = getDomElement('.location-current-btn')
const btnUser = getDomElement('.btn_sing-in')
const input = getDomElement('#locationInput')
const locationSearchBtn = getDomElement('#locationSearchBtn')
const cityList = getDomElement('.city-nav__list')
const locationSection = getDomElement('.location')

temperature.addEventListener('click', translationTemp)
temperature.addEventListener('click', toggleShowSelect)
btnUser.addEventListener('click', showVerificationForm)
locationCurrentBtn.addEventListener('click', useCurrentPosition)
input.addEventListener('keydown', searchCityKeydownEnter)
locationSearchBtn.addEventListener('click', searchCityInput)
cityList.addEventListener('click', navigationByRB)

timeNav()
setDataAndTime()

const start = () => {
	addClasses(locationSection, 'start')
}
