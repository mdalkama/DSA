// contiguous array

function subarray(nums) {
    let max = 0
    let result = []
    for (let i = 0; i < nums.length; i++) {
        let freq = {}
        for (let j = i; j < nums.length; j++) {
            let ch = nums[j]
            freq[ch] = (freq[ch] || 0) + 1

            if (freq[0] == freq[1]) {
                let arr = nums.slice(i, j + 1)
                if (arr.length > max) {
                    max = arr.length
                }
            }
        }
    }
    return max
}
console.log(subarray([0, 1, 1, 1, 1, 1, 0, 0, 0]))