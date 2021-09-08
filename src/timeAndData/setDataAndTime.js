import { getDomElement } from "../utils/utilsFunc.js"

export const setDataAndTime = () => {
  let year = +new Date().getFullYear()
  let month = +new Date().getMonth() + 1
  let date = +new Date().getDate()
  let hour = +new Date().getHours()
  let minute = +new Date().getMinutes()
  let seconds = +new Date().getSeconds()

  const timeElement = getDomElement('.time')
  const dateElement = getDomElement('.current-city__date')

  dateElement.innerHTML = `${String(date).padStart(2, 0)}.${String(month).padStart(2, 0)}.${year}`
  timeElement.innerHTML = `${String(hour).padStart(2, 0)} : ${String(minute).padStart(2, 0)}`


  setInterval(() => {
    ++seconds

    if (seconds > 59) {
      seconds = '00'

      timeElement.innerHTML = `${hour} : ${String(++minute).padStart(2, 0)}`
    }
    if (minute > 59) {
      minute = '00'

      timeElement.innerHTML = `${String(++hour).padStart(2, 0)} : ${minute}`
    }
    if (hour > 23) {
      hour = '00'

      timeElement.innerHTML = `${hour} : ${minute}`
      dateElement.innerHTML = `${String(++date).padStart(2, 0)}.${month}.${year}`
    }
  }, 1000)
}