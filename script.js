let image = document.getElementById(`image`)
let guess = document.getElementById(`guess`)
let guessButton = document.getElementById(`guessButton`)
let resultParagraph = document.getElementById(`resultParagraph`)

let randomNumber = Math.floor(Math.random() * 360)
image.style.transform = `rotate(${randomNumber}deg)`

guessButton.addEventListener(`click`, showResult)

function showResult() {
  let guessValue = guess.value.trim()

  if (guessValue == `` || isNaN(guessValue)) {
    resultParagraph.innerHTML = `Please type a number.`
  }
  else {
    let diff = Math.abs(randomNumber - guessValue)
    resultParagraph.innerHTML = `Rotation is ${randomNumber}. You were off by ${diff}.`
  }
}