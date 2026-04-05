// Count vowels and consonants in a string

const str = "mynameisalkama";
let vowel = 0;
let consonants = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() == "a" || str[i].toLowerCase() == "e" || str[i].toLowerCase() == "i" || str[i].toLowerCase() == "o" || str[i].toLowerCase() == "u") {
        vowel++
    } else {
        consonants++
    }
}

console.log(`vowel: ${vowel}`)
console.log(`consonants: ${consonants}`)