import { getDomElement, createElement, removeElement, addClasses } from '../utils/utilsFunc.js'


export const showError = (descriptionError) => {
  const error = `
    <div class="error" data-type="closeError">
      <div class="error-body">
        <div class="error-header">
          <p class="error__icon">
            <i class="fas fa-exclamation-triangle"></i>
          </p>
          <p class="error__title">
            Error:
          </p>
        </div>
        <p class="error__description">
          <span>${descriptionError}</span>
        </p>
        <div class="error-buttons">
          <button class="error-buttons__btn" data-type="closeError">I realized</button>
        </div>
      </div>
    </div>`

  createElement('.wrapper', error)

  setTimeout(() => {
    playAudio()

    addClasses('.error', 'show')
  }, 0)

  getDomElement('.error').addEventListener('click', hideError)
}

const hideError = (event) => {
  if (event.target.dataset.type === 'closeError') {
    removeElement('.error', 'show')
  }
}

const playAudio = () => {
  const errorAudio = new Audio('../src/error/error.mp3')

  errorAudio.play()
}