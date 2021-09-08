import { deleteClasses } from '../../utils/utilsFunc.js'

export const thisNoValid = (input, massage = 'no-valid') => {
  deleteClssValidations(input)

  const currentBlock = input.closest('div')
  
  if (!currentBlock.querySelector('span')) {
    currentBlock.insertAdjacentHTML('afterbegin', `<span class="remark"></span>`)
  }
  
  currentBlock.classList.add('no-valid')
  currentBlock.querySelector('span').innerText = massage
}

export const thisValid = (input) => {
  deleteClssValidations(input)

  const currentBlock = input.closest('div')

  if (currentBlock.querySelector('span')) {
    currentBlock.querySelector('span').remove()
  }

  currentBlock.classList.add('valid')
}

export const deleteClssValidations = (input) => {
  const currentBlock = input.closest('div')

  deleteClasses(currentBlock, 'valid', 'no-valid')
}