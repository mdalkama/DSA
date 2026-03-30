// Find sum of minimum absolute difference of the given array


const num = [1, 2, 3, 4]
const diff = []

num.sort((a, b) => {
    return a - b
})

for (let i = 0; i < num.length - 1; i++) {
    diff.push(Math.abs(num[i] - num[i + 1]))
}
const min = Math.min(...diff)

let sum = 0

for (let i = 0; i < diff.length; i++) {
    if (diff[i] == min) {
        sum += diff[i]
    }
}

console.log(sum)