import { createElement, getDomElement } from "../utils/utilsFunc.js";
import { getServerData } from "../request/request.js"


export const timeNav = () => {
  let hours = +`${new Date().getHours()}`
  let index = 1

  if (getDomElement('.time-nav__link', true).length) return

  createElement('.time-nav__list', `
    <li>
      <a href="" class="time-nav__link" id="0">current time</a>
    </li>`)

  for (let i = 0; i < 9; i++) {
    if (hours > 21) hours -= 24

    hours += 3

    createElement('.time-nav__list', `
      <li>
        <a href="" class="time-nav__link" id="${index++}">${hours}:00</a>
      </li>`)
  }

  getDomElement('.time-nav__list').addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      event.preventDefault()
      getServerData(getDomElement('.current-city__name').innerText, event.target.id)
      // const timeElement = getDomElement('.heading__title')
      // timeElement.innerHTML = event.target.innerHTML
    }
  })
}