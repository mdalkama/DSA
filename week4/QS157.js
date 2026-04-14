// Sum of Unique Elements

const nums = [1, 2, 3, 2]
let map = {}
let sum = 0
for (let i of nums) {
    map[i] = (map[i] || 0) + 1
}

for (let i in map) {
    if (map[i] == 1) {
        sum += +i
    }
}
console.log(sum)