// Product of Array Except Self


const nums = [1, 2, 3, 4]

let ps = []
let pe = []
let answer = []

let preSum = 1
let postSum = 1

for (let i = 0; i < nums.length; i++) {
    ps[i] = preSum *= nums[i]
}

for (let i = nums.length - 1; i >= 0; i--) {
    pe[i] = postSum *= nums[i]
}


console.log(ps)
console.log(pe)

for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
        answer[i] = pe[i + 1]
    } else if (i == nums.length - 1) {
        answer[i] = ps[i - 1]
    } else {
        answer[i] = ps[i - 1] * pe[i + 1]
    }
}

console.log(answer)