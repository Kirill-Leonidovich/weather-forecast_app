import { createElement, removeElement, addClasses } from '../../utils/utilsFunc.js'
import { handlerEvent } from './handler.js'


export const showRegistrationForm = () => {
  const registrationForm = `
    <div class="registration">
      <span class="registration__btn_close act-btn-close" id="btnClose"></span>
      <div class="act-card">
        <p class="act__title">
          Welcome<span>!</span>
        </p>
        <p class="act__subtitle">
          For registration you need to specify the following data.
        </p>
        <form action="#">
          <div class="act__item mandatory registration-username">
            <input class="act__input" id="inputUserName" type="text" placeholder=" ">
            <label class="act__label" id="labelaUserName" for="inputUserName">
              User Name!
            </label>
          </div>
          <div class="act__item mandatory registration-mail">
            <input class="act__input" id="inputMailRegistration" type="email" placeholder=" ">
            <label class="act__label" id="labelMailRegistration" for="inputMail">
              E-mail!
            </label>
          </div>
          <div class="act__item registration-phone">
            <input class="act__input" id="inputPhone" type="tel" placeholder=" ">
            <label class="act__label" id="labelPhone" for="inputPhone">
              Phone
            </label>
          </div>
          <div class="act__item registration-dateofbirth">
            <input class="act__input" id="inputDateofbirth" type="date" placeholder=" ">
            <label class="act__label" id="labelDateofbirth" for="inputDateofbirth">
              Date of Birth
            </label>
          </div>
          <div class="act__item mandatory registration-password-one">
            <input class="act__input" id="inputPasswordRegistrationOne" type="password" placeholder=" ">
            <label class="act__label" id="labelPasswordRegistrationOne" for="inputPasswordOne">
              Password one!
            </label>
          </div>
          <div class="act__item mandatory registration-password-two">
            <input class="act__input" id="inputPasswordRegistrationTwo" type="password" placeholder=" ">
            <label class="act__label" id="labelPasswordRegistrationTwo" for="inputPassword">
              Repeat password!
            </label>
          </div>
          <div class="registration-agreement" id="castomCheckBox">
            <span class="registration-agreement__checkbox_castom"></span>
            <input class="registration-agreement__input" id="inputCheckBox" type="checkbox" hidden>
            <label class="registration-agreement__label" id="labelCheckBox" for="inputCheckBox">
              I accept the terms of the agreement
            </label>
          </div>
          <button class="act__button" id="buttonSignUp" type="submit" disabled>
            registration
          </button>
        </form>
      </div>
    </div>
    `

  if (document.querySelector('.registration')) return

  removeElement('.verification', 'show')
  createElement('.wrapper', registrationForm) 
  setTimeout(() => addClasses('.registration', 'show'), 250)
  handlerEvent()
}
