// Search in Rotated Sorted Array

const nums = [4, 5, 6, 7, 0, 1, 2]
const target = 0


let left = 0;
let right = nums.length - 1;
let flag = -1

while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
        flag = mid
        break;
    } else if (nums[mid] >= nums[left]) {
        if (nums[left] <= target && target <= nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    } else {
        if (nums[mid] <= target && target <= nums[right]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
}

console.log(flag)