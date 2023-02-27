import "../../style.css"

let answer = Math.floor(Math.random() * 10) + 1;
let chances = 0;
const numberInput = document.getElementById("number-input") as HTMLInputElement;
const resetButton = document.getElementById("reset-button") as HTMLButtonElement
let message = document.getElementById("message")

console.log({ chances, answer })

function resetTheGame() {
  chances = 0;
  answer = Math.floor(Math.random() * 10) + 1;
  console.log({ chances, answer })
}

function displayMessage(m: string) {
  // let x = message?.innerHTML
  // x = `${m}`
}

document.getElementById("number-form")?.addEventListener("submit", (event) => {
  // prevent form submit
  event.preventDefault();
  const guess = Number(numberInput.value)

  // check the if guess === answer
  // check the if guess > answer
  // check the if guess <
  if (guess === answer) {
    displayMessage("Congrats you won")
    console.log("you won the game")
    resetTheGame()
  } else if (guess > answer) {
    displayMessage("your guess is higher than the answer")
    console.log("your guess is higher than the answer")
  } else if (guess < answer) {
    displayMessage("your guess is lower than the answer")
    console.log("your guess is lower than the answer")
  }

  // increase the chances
  chances++
  console.log({ chances, guess })
})

resetButton.addEventListener("click", () => {
  resetTheGame()
})
