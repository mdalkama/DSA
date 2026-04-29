// Longest Sub-Array with Sum K

function subarray(nums, k) {
    let max = 0
    let result = []
    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        for (let j = i; j < nums.length; j++) {
            sum += nums[j]

            if (sum == k) {
                let arr = nums.slice(i, j + 1)
                if (arr.length > max) {
                    max = arr.length
                    result = arr
                }
            }
        }
    }
    return result
}
console.log(subarray([1, 2, 1, 2, 3, 1, 1, 1], 3))