// Search in an Infinite sorted array


const arr = [1, 2, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 45, 76, 84, 89, 94, 98, 102, 116, 117, 124, 130, 140, 147, 152, 159, 172, 165, 167, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191]

const target = 124
let op = 0

function bindarySearch(nums, left, right) {
op++
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
    return flag
}

let low = 0
let high = 2

while (target > arr[high]) {
    op++
    low = high
    high *= 2
}

console.log(bindarySearch(arr, low, high))

console.log(op)