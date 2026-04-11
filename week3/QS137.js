// Sort Array By Parity


const nums = [3, 1, 2, 4]
let i = 0;
let j = nums.length - 1


while (i < j) {
    while (i < nums.length && nums[i] % 2 == 0) {
        i++
    }
    while (j > 0 && nums[j] % 2 != 0) {
        j--
    }

    if (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }
}

console.log(nums)