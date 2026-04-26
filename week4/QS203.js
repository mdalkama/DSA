// Subarray with 0 sum


const arr = [4, 2, -3, 1, 6]

let sum = 0
let map = {}
let flag = 0

for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    if (map[sum]) {
        flag = 1
        break;
    } else {
        map[arr[i]] = 1
    }
    if (arr[i] == 0) {
        flag = 1
        break;
    }
}
if (flag) {
    console.log(true)
} else {
    console.log(false)
}