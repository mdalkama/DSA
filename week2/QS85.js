// Count Hills and Valleys in an Array

const arr = [6, 6, 5, 5, 4, 1]
let count = 0
let left = 0
for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
        if (arr[i] > arr[left] && arr[i] > arr[i + 1] || arr[i] < arr[left] && arr[i] < arr[i + 1]) {
            count++
        }
        left = i
    }
}
console.log(count)