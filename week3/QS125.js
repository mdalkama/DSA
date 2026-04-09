// Check Whether Two Strings are Almost Equivalent

const word1 = "aaaa"
const word2 = "bccb"

const map1 = {}
const map2 = {}

for (let i = 0; i < 26; i++) {
    map1[String.fromCharCode(97 + i)] = 0
    map2[String.fromCharCode(97 + i)] = 0
}

for (let i = 0; i < word1.length; i++) {
    map1[word1[i]] = (map1[word1[i]] || 0) + 1
    map2[word2[i]] = (map2[word2[i]] || 0) + 1
}


for (let i in map1) {
    if ((Math.abs(map1[i] - map2[i])) > 3)
    console.log(false)
}
console.log(true)