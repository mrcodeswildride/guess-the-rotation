let image = document.getElementById(`image`)
let guess = document.getElementById(`guess`)
let submitButton = document.getElementById(`submitButton`)
let resultParagraph = document.getElementById(`resultParagraph`)

let randomNumber = Math.floor(Math.random() * 360)
image.style.transform = `rotate(${randomNumber}deg)`

submitButton.addEventListener(`click`, submit)

guess.focus()

function submit() {
  let guessValue = guess.value.trim()

  if (guessValue == ``) {
    resultParagraph.innerHTML = `Type a number.`
  } else {
    let diff = Math.abs(randomNumber - guessValue)
    resultParagraph.innerHTML = `Rotation is ${randomNumber}. You were off by ${diff}.`
  }
}
