// Squares of a Sorted Array

const nums = [-4, -1, 0, 3, 10]


for (let i = 0; i < nums.length; i++){
    nums[i] = nums[i] * nums[i]
}

nums.sort((a,b)=>a-b)

console.log(nums)