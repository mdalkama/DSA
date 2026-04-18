// Binary Search on descending sorted array

const nums = [12, 9, 5, 3, 0, -1]
const target = 9

let low = 0
let high = nums.length - 1
let result = -1

while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (nums[mid] > target) {
        low = mid + 1
    }
    else if (nums[mid] < target) {
        high = mid - 1
    }
    else {
        result = mid
        break;
    }
}

console.log(result)