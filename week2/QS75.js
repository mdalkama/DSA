// Given an array of even size, task is to find minimum value that can be added to an element so that the array becomes balanced. An array is balanced if the sum of the left half of the array elements is equal to the sum of the right half. (Ex: Input : 1 2 1 2 1 3, Output : 2)

let num = [1, 1, 1, 10]

let leftSum = 0
let rightSum = 0

for (let i = 0; i < Math.floor(num.length / 2); i++) {
    leftSum += num[i]
    rightSum += num[Math.floor(num.length / 2) + i]
}

console.log(Math.abs(leftSum - rightSum))