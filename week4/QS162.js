// Find the Difference

const s = "abcd"
const t = "abcde"

const sMap = {}
const tMap = {}

for (let i of s) {
    sMap[i] = (sMap[i] || 0) + 1
}
for (let i of t) {
    tMap[i] = (tMap[i] || 0) + 1
}

for (let i in tMap) {
    if (tMap[i] != sMap[i]) {
        console.log(i)
    }
}