// Most Frequent Even Element

const nums = [0, 1, 2, 2, 4, 4, 1]

let freq = {}

for (let i of nums) {
    if (i % 2 == 0) {
        freq[i] = (freq[i] || 0) + 1
    }
}
let elem = -1
let max = 0
for (let i in freq) {
    if (freq[i] > max) {
        elem = i
        max = freq[i]
    }
}
console.log(max)