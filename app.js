const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const btn4 = document.querySelector("#btn4")
const btn5 = document.querySelector("#btn5")
const time = document.querySelector("#time")
const clicks = document.querySelector("#clicks")
const clickArea = document.querySelector("#clickArea")
const clickNum = document.querySelector("#clickNum")
const finish = document.querySelector("#finish")
const tryAgain = document.querySelector("#tryAgain")

btn1.addEventListener("click", () => time.textContent = 5)
btn2.addEventListener("click", () => time.textContent = 10)
btn3.addEventListener("click", () => time.textContent = 15)
btn4.addEventListener("click", () => time.textContent = 30)
btn5.addEventListener("click", () => time.textContent = 60)
clickArea.addEventListener("click", () => printNumbers(time.textContent - 1, 0))
clickNum.addEventListener("click", ()=>clicks.textContent++)
tryAgain.addEventListener("click", returnToStart)

time.textContent = 5
clicks.textContent = 0

function printNumbers(from, to) {
  let current = from;
  let startNum = from + 1
  clicks.textContent = 0
  btnDisable()
  let timerId = setInterval(function () {
    time.textContent = current;
    if (current == to) {
      clearInterval(timerId);
      time.textContent = startNum
      btnDisable()
      finishEvent(clicks.textContent, startNum)
    }
    current--;
  }, 1000);
}
function btnDisable() {
  clickArea.classList.toggle("d-none")
  btn1.classList.toggle("disabled")
  btn2.classList.toggle("disabled")
  btn3.classList.toggle("disabled")
  btn4.classList.toggle("disabled")
  btn5.classList.toggle("disabled")
}
function finishEvent(click, time) {
  let cps = click / time
  clickNum.classList.toggle("d-none")
  finish.classList.toggle("d-none")
  document.querySelector("#finishText").textContent = `Your click score is ${cps} CPS.
   ${click} clicks in ${time} seconds. `
}
function returnToStart() {
  clickNum.classList.toggle("d-none")
  finish.classList.toggle("d-none")
}