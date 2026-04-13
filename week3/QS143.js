// Maximum Subarray (Kadane's Algo)

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]


function maxSubArray(nums) {

    let max = nums[0] //1
    let sum = nums[0] //
    for (let i = 1; i < nums.length; i++) {
        sum = Math.max(nums[i], nums[i] + sum);
        max = Math.max(max, sum)
    }
    return max
}

console.log(maxSubArray(nums))