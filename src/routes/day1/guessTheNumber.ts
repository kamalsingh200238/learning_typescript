import "../../style.css"

let answer = Math.floor(Math.random() * 10) + 1;
let chances = 0;
const numberInput = document.getElementById("number-input") as HTMLInputElement;
const resetButton = document.getElementById("reset-button") as HTMLButtonElement
let message = document.getElementById("message")

console.log({ chances, answer })

function resetTheGame(m: string = "New game has been started") {
  // change chances
  chances = 0;
  // create new answer
  answer = Math.floor(Math.random() * 10) + 1;
  // change the text inside the text field
  numberInput.value = ""
  // change the message
  displayMessage(m)
  console.log({ chances, answer })

}

function displayMessage(m: string) {
  if(message) {
    message.innerText = m
  }
}

document.getElementById("number-form")?.addEventListener("submit", (event) => {
  // prevent form submit
  event.preventDefault();
  const guess = Number(numberInput.value)

  // check the if guess <
  if (guess === answer) {
    resetTheGame("Congrats You won the game. And a new game has been started for you.")

  } else if (guess > answer) {// check the if guess > answer
    displayMessage("your guess is higher than the answer")

  } else if (guess < answer) { // check the if guess === answer
    displayMessage("your guess is lower than the answer")
  }

  // increase the chances
  chances++

  // check if chances has 
  if(chances >= 5) {
    resetTheGame("You lost the previous game. But a new game has been started for you. Good luck this time.")
  }
})

resetButton.addEventListener("click", () => {
  resetTheGame()
})
