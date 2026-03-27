// Given a sorted array of distinct elements, find the summation of absolute differences of all pairs in the given array. (Ex: arr[] = {1, 2, 3, 4}, Output: 10)


const arr = [1, 2, 3, 4, 5, 7, 9, 11, 14]

let sum = 0
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++)
        sum += Math.abs(arr[i] - arr[j])
}
console.log(sum)