// Find the Duplicate Number

const nums = [1, 3, 4, 2, 2]

const map = {}

for (let i of nums) {
    if (map[i]) {
        console.log(i)
    } else {
        map[i] = (map[i] || 0) + 1
    }
}
