import { createElement, getDomElement, addClasses, deleteClasses } from '../../utils/utilsFunc.js'
import { locationSection } from '../../start/start.js'
import { cardWeatherContent } from '../../cardWeather/setDataCardWeather.js'
import { showRegistrationForm } from '../registration/showForm.js'
import { entrance } from './entrance.js'
import { hideVerificationForm } from './hideForm.js'


export const showVerificationForm = () => {
  const verificationForm = `
    <div class="verification">
      <span class="verification__btn_close act-btn-close"></span>
      <div class="act-card">
        <p class="act__title">
            Welcome<span>!</span>
        </p>
        <p class="act__subtitle">
            For verification you need to specify the following data.
        </p>
        <form action="#">
          <div class="act__item mandatory verification-mail">
            <input class="act__input" id="inputMailVerification" type="email" placeholder=" ">
            <label class="act__label" id="labelMailVerification" for="inputMail">
              E-mail!
            </label>
          </div>
          <div class="act__item mandatory verification-password">
            <input class="act__input" id="inputPasswordVerification" type="password" placeholder=" ">
            <label class="act__label" id="labelPasswordVerification" for="inputPassword">
              Repeat password!
            </label>
          </div>

          <button class="act__button" id="buttonSingIn" type="submit">
              sing in
          </button>
          <a class="verefication__btn_go-to-sing-up" href="#">
            You can register!           
          </a>
        </form>
      </div>
    </div>`

  if (document.querySelector('.verification')) return

  deleteClasses(locationSection, 'start')
  deleteClasses(cardWeatherContent, 'active')
  createElement('.wrapper', verificationForm)
  setTimeout(() => addClasses('.verification', 'show'), 0)

  const close = getDomElement('.verification__btn_close')
  const goToRegistration = getDomElement('.verefication__btn_go-to-sing-up')
  const buttonSingIn = getDomElement('#buttonSingIn')

  close.addEventListener('click', hideVerificationForm)
  goToRegistration.addEventListener('click', showRegistrationForm)
  buttonSingIn.addEventListener('click', entrance)
}