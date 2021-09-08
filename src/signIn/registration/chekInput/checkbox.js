import { deleteClasses, addClasses } from '../../../utils/utilsFunc.js'
import { disabledBtn } from './btnSignUp.js'


export const checkClick = () => {
  if (inputCheckBox.checked) {
    inputCheckBox.checked = false
    deleteClasses(castomCheckBox, 'checked')
  } else {
    inputCheckBox.checked = true
    addClasses(castomCheckBox, 'checked')
  }
  
  disabledBtn()
}