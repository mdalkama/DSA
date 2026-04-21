// Peak Index in a Mountain Array / Find maximum element in bitonic array (Monotonic, Bitonic Array)

const nums = [0, 10, 5, 2]


function findPeak(nums) {
let low = 0;
let high = nums.length - 1;

while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] < nums[mid + 1]) {
        low = mid + 1;
    } else {
        high = mid;
    }
}
return low;
}

const low = findPeak(nums);
console.log(low)
