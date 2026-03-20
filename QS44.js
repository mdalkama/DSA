// Project - Guess Game

function guessGame() {
    const randomNumber = Math.floor(Math.random() * 100)
    let text = "Enter a number"
    do {
        value = prompt(text)
        if (value > randomNumber) {
            text = "Value is high"
        } else {
            text = "Value is low"
        }
    } while (value != randomNumber)
    console.log("Congratulations you guess right!")
}
guessGame()