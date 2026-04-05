// Percentage of Letter in String

const s = "foobar"
const letter = 'o'

let count = 0

for (let i = 0; i < s.length; i++) {
    if (s[i] == letter) {
        count++
    }
}

console.log((count / s.length) * 100)