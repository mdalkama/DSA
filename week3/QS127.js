// Reverse Prefix of Word


const word = "abcdefd"
const ch = "d"

let wordArr = word.split("")


let idx = 0

for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i] == ch) {
        idx = i
        break;
    }
}

wordArr = [...wordArr.splice(0, idx + 1).reverse(), ...wordArr]

console.log(wordArr.join(""))