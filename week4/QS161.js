// distribute candies

const candyType = [6, 6, 6, 6]

const map = {}

for (let i of candyType) {
    if (!map[i]) {
        map[i] = 1
    }
}
let type = 0
for (let i in map) {
    type++
}

console.log(Math.min(type, Math.floor(candyType.length / 2)))