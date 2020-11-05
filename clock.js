setInterval(setClock, 1000)
const hourHand = document.querySelector('[data-hour-hand]')
const minutesHand = document.querySelector('[data-minute-hand]')
const secondsHand = document.querySelector('[data-second-hand]')



function setClock()
{
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio =(secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio =(minutesRatio + currentDate.getHours()) / 12
  setRotation(secondsHand, secondsRatio)
  setRotation(minutesHand, minutesRatio)
  setRotation(hourHand, hoursRatio)

}

function setRotation(element, rotationRatio)
{
    element.style.setProperty('--rotation', rotationRatio * 360)
}
setClock()  