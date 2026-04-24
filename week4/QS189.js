// Find Minimum in Rotated Sorted Array

const nums = [3, 4, 5, 1, 2]

let left = 0;
let right = nums.length - 1;

while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] <= nums[right]) {
        right = mid;
    } else {
        left = mid + 1;
    }
}

console.log(nums[left])