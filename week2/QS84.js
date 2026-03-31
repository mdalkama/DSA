// Make Array Zero by Subtracting Equal Amounts


let nums = [1, 5, 0, 3, 5]
const hash = {}
let count = 0

for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] == undefined && nums[i] != 0) {
        hash[nums[i]] = 1
        count++
    }
}

console.log(count)