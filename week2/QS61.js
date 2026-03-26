// Array Reverse Without Using Extra space

let arr = [1,2,3,4,5]

let n = arr.length

let i = 0

while (i < Math.floor(n / 2)) {
    let temp = arr[i]
    arr[i] = arr[n-1-i];
    arr[n-1-i] = temp
    i++
}

console.log(arr)