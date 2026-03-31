// Sort Even and Odd Indices Independently


const arr = [36, 45, 32, 31, 15, 41, 9, 46, 36, 6, 15, 16, 33, 26, 27, 31, 44, 34]

const even = []
const odd = []

for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
        even.push(arr[i])
    } else {
        odd.push(arr[i])
    }
}

even.sort((a, b) => a - b)
odd.sort((a, b) => b - a)
console.log(even)
console.log(odd)

let oddNum = 0
let evenNum = 0
for (let i = 0; i < arr.length; i++) {
    arr[i] = i % 2 == 0 ? even[evenNum++] : odd[oddNum++]
}

console.log(arr)