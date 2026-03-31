// Find Greatest Common Divisor of Array


const nums = [7, 5, 6, 8, 3]
let min = Math.min(nums[0], nums[1])
let max = Math.max(nums[0], nums[1])

for (let i = 2; i < nums.length; i++) {
    if (nums[i] > max) {
        max = nums[i]
    }
    if (nums[i] < min) {
        min = nums[i]
    }
}

let i = min
while (i <= min) {
    if (min % i == 0 && max % i == 0) {
        break;
    }
    i--
}
console.log(i)