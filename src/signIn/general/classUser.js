import { hideRegistrationForm } from '../registration/hideForm.js'
import { hideVerificationForm } from '../verification/hideForm.js'
import { showVerificationForm } from '../verification/showForm.js'
import { btnUser } from '../../start/start.js'

const userBlock = document.querySelector('.sing-in')


export class Users {  // добавить методы для изменения личных данный user

  constructor(options) {

    if (options) {
      window.u = options

      this.userName = options.userName
      this.mail = options.mail
      this.password = options.password
      this.id = options.id
      this.phone = options.phone
      this.dateOfBirth = options.dateOfBirth
      this.dateRegirtration = options.dateRegirtration

      this.goOut
      this.edit

      this.finish()
    }
  }



  finish() {
    alert(`hello ${this.userName} you are logged into your account`)
    console.log(this);
    hideRegistrationForm()
    hideVerificationForm()

    btnUser.classList.add('active')
    btnUser.removeEventListener('click', showVerificationForm)
    btnUser.addEventListener('click', this.#profile.bind(this))
  }

  #profile() {
    this.#toggleProfileMenu()
  }

  #toggleProfileMenu() {
    if (userBlock.querySelector('.sing-in__menu')) {
      userBlock.querySelector('.sing-in__menu').remove()
      return
    }

    const userMenu = `<div class="sing-in__menu">
      <nav class="sing-in__nav">
        <ul class="sing-in__list">
          <li>
            <a class="sing-in__link edit" href="#">
              edit
            </a>
          </li>
          <li>
            <a class="sing-in__link goOut" href="#">
              go out
            </a>
          </li>
        </ul>
      </nav>
    </div>
    `

    userBlock.insertAdjacentHTML('afterbegin', userMenu)

    this.goOut = document.querySelector('.goOut')
    this.edit = document.querySelector('.edit')

    this.edit.addEventListener('click', this.#edit.bind(this))
    this.goOut.addEventListener('click', this.#goOut.bind(this))
  }

  #edit() {
    console.log(window.u);
  }

  #removeHandler() {
    btnUser.addEventListener('click', this.#profile.bind(this))
    this.edit.removeEventListener('click', this.#edit)
    this.goOut.removeEventListener('click', this.#goOut)
  }

  #goOut()  {
    this.#removeHandler()
    btnUser.classList.remove('active')
    userBlock.querySelector('.sing-in__menu').remove()
    btnUser.addEventListener('click', showVerificationForm)

    this.userName = ''
    this.mail = ''
    this.password = ''
    this.id = ''
    this.phone = ''
    this.dateOfBirth = ''
    this.dateRegirtration = ''

    window.u = undefined
  }
}