// Unique Morse Code Words


const morsCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]

const words = ["gin", "zen", "gig", "msg"]


const morsMap = {}

for (let i in morsCode) {
    morsMap[String.fromCharCode(97 + +i)] = morsCode[i]
}

const map = {}

for (let i in words) {
    let wrd = ""
    let mors = ""
    for (let j of words[i]) {
        wrd += j
        mors += morsMap[j]
    }
    map[mors] = (map[mors] || 0) + 1
}

let count = 0;

for (let i in map) {
    count++
}
console.log(count)