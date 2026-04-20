// Count of element in the sorted array


const nums = [5, 7, 7, 8, 8, 8, 8, 8, 10]
const target = 8

function binary(nums, target, findFirst) {
    let result = -1

    let low = 0;
    let high = nums.length - 1

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (nums[mid] < target) {
            low = mid + 1
        }
        else if (nums[mid] > target) {
            high = mid - 1
        }
        else {
            result = mid

            if (findFirst) {
                while (nums[mid - 1] == target) {
                    result = mid - 1
                    mid--
                }
            } else {
                while (nums[mid + 1] == target) {
                    result = mid + 1
                    mid++
                }
            }
            break;
        }
    }
    return result;
}

console.log(binary(nums, target, false) - binary(nums, target, true) + 1)