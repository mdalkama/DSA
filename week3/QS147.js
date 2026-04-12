// Move all Negative elements to one side


const nums = [1, -1, 3, 2, -7, -5, 11, 6]
let start = 0;
let end = nums.length - 1

while (start < end) {
    while (nums[end] >= 0) end--
    while (nums[start] < 0) start++
    [nums[start], nums[end]] = [nums[end], nums[start]]
}

console.log(nums)