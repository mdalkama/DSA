const nums = [3, 1, 2, 10, 1]

for (let i = 1; i < nums.length; i++){
    nums[i] = nums[i]+ nums[i-1]
}
console.log(nums)