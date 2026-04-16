// Decode the Message


const key = "the quick brown fox jumps over the lazy dog"
const message = "vkbs bs t suepuv"
const data = key.split(" ").join("")

const map = {
}
let charCount = 0
for (let i in data) {
    if (!map[data[i]]) {
        map[data[i]] = String.fromCharCode(97 + charCount)
        charCount++
    }
}
let result = ""

for (let i of message) {
    if (i == " ") {
        result += " "
    }else{
        result += map[i]
    }
}



console.log(result)