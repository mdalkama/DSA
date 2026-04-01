// Find the Highest Altitude

let arr = [-5, 1, 5, 0, -7]

let alt = 0
let max = 0

for (let i = 0; i < arr.length; i++) {
    alt += arr[i]
    max = Math.max(max, alt)
}
console.log(max)