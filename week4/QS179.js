// Search Insert Position


const nums = [1, 3, 5, 6]
const target = 5


function searchInsertion(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let mid = Math.floor((start + end) / 2);
    while (start <= end) {
        if (nums[mid] == target) {
            return mid;
        }
        else if (nums[mid] > target) {
            end = mid - 1;
            mid = Math.floor((start + end) / 2);
        } else {
            start = mid + 1;
            mid = Math.floor((start + end) / 2);
        }
    }
    if (start > end) {
        return mid + 1;
    }
    return mid;
}

console.log(searchInsertion(nums, target))