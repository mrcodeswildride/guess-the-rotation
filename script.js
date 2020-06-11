let image = document.getElementById(`image`)
let guess = document.getElementById(`guess`)
let submitButton = document.getElementById(`submitButton`)
let resultParagraph = document.getElementById(`resultParagraph`)

let randomNumber = Math.floor(Math.random() * 360)
image.style.transform = `rotate(${randomNumber}deg)`

submitButton.addEventListener(`click`, submit)

function submit() {
  let guessValue = guess.value.trim()

  if (guessValue == `` || isNaN(guessValue)) {
    resultParagraph.innerHTML = `Please type a number.`
  }
  else {
    let diff = Math.abs(randomNumber - guessValue)
    resultParagraph.innerHTML = `Rotation is ${randomNumber}. You were off by ${diff}.`
  }
}