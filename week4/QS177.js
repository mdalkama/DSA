// Order agnostic binary search - Unknown Order

const nums = [12, 9, 5, 3, 0, -1];
const target = 9;

let low = 0;
let high = nums.length - 1;

let isAscending = nums[low] <= nums[high];

while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
        console.log(mid);
        return;
    }

    if (isAscending) {
        if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    } else {
        if (nums[mid] > target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
}

console.log(-1);