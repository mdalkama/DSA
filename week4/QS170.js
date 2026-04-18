// Find All Numbers Disappeared in an Array

const nums = [4, 3, 2, 7, 8, 2, 3, 1]

nums.sort((a, b) => a - b)
const max = nums.length

const arr = []
const map = {}

for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
        map[nums[i]] = (map[nums[i]] || 0) + 1
    }
}

for (let i = 1; i <= max; i++) {
    if(!map[i]){
        arr.push(i)
    }
}
console.log(arr)