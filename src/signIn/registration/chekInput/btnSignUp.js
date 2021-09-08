export const disabledBtn = () => {
  const sheckValid = isClassInMandatory('valid')
  const sheckNoValid = !isClassInMandatory('no-valid')
  
  if (inputCheckBox.checked && sheckValid && sheckNoValid) {
    return buttonSignUp.disabled = false
  }

  return buttonSignUp.disabled = true
}

const isClassInMandatory = (classes) => {
  const allInput = Array.from(document.querySelectorAll('.mandatory')) || []

  return allInput.every(input => {
    return input.classList.contains(classes)
  })
}