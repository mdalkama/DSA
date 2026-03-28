// Sort First half in Ascending and Second half in descending order in an array


let arr = [5, 1, 4, 2, 3]

let half = Math.floor(arr.length / 2)

let firstHalf = arr.splice(0, half).sort((a, b) => {
    return a - b
})
let secondHalf = arr.splice(0, arr.length).sort((a, b) => {
    return b - a
})

arr = [...firstHalf, ...secondHalf]
console.log(arr)