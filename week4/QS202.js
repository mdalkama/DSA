// Subarray Sum Equals K - BQ(Ex: 3, 9, -2, 4, 1, -7, 2, 6, -5, 8, -3, -7, 6, 2, 1 k = 5)


const nums = [1,0,1,2,1,0,4,1,3]
const k = 4

let count = 0;
let sum = 0;

let freq = { 0: 1 };

for (let num of nums) {
    sum += num;

    if (freq[sum - k]) {
        count += freq[sum - k];
    }

    freq[sum] = (freq[sum] || 0) + 1;
}

console.log(count);
