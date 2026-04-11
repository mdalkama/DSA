// Move Zeroes

const nums = [0, 1, 0, 3, 12]

let insertIndex = 0;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
        nums[insertIndex] = nums[i];
        insertIndex++;
    }
}
while (insertIndex <= nums.length - 1) {
    nums[insertIndex] = 0;
    insertIndex++;
}


console.log(nums)