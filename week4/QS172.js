
//  Find All Duplicates in an Array

const nums = [4, 3, 2, 7, 8, 2, 3, 1]

const map = {}
const final = []

for (let i of nums) {
    if (map[i]) {
        final.push(i)
    } else {
        map[i] = (map[i] || 0) + 1
    }
}

console.log(final)