// Majority Element (Boyer Moore's Voting Algo)

const nums = [2, 2, 1, 1, 1, 2, 2];

let maj = nums[0];
let count = 1;

for (let i = 1; i < nums.length; i++) {
    if (nums[i] == maj) {
        count++;
    } else {
        count--;
    }

    if (count == 0) {
        maj = nums[i];
        count = 1;
    }
}

console.log(maj);

