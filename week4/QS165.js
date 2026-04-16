// Word Pattern

const pattern = "abba"
const s = "dog cat cat dog"

const sArr = s.split(" ");

if (pattern.length !== sArr.length) {
    return false;
}

let pToWord = {};
let wordToP = {};

for (let i = 0; i < pattern.length; i++) {
    let ch = pattern[i];
    let word = sArr[i];

    if (!pToWord[ch]) {
        pToWord[ch] = word;
    }

    if (!wordToP[word]) {
        wordToP[word] = ch;
    }

    if (pToWord[ch] !== word || wordToP[word] !== ch) {
        console.log(false)
    }
}

console.log(true)