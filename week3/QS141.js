// Find Pivot Index

const nums = [1, 7, 3, 6, 5, 6]


let totalSum = 0

for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i]
}

let leftSum = 0
for (let i = 0; i < nums.length; i++) {

    if (leftSum == totalSum - leftSum - nums[i]){
        console.log(i)
        break
    }
        leftSum += nums[i]
}

console.log(-1)