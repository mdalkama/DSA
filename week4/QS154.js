// Jewels and Stones

const jewels = "aA"
const stones = "aAAbbbb"

const map = {}
let count = 0
for (let i of jewels) {
    map[i] = (map[i] || 0) + 1
}
for (let i of stones) {
    if (map[i]) {
        count++
    }
}
console.log(count)