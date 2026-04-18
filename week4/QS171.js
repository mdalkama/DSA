// Set Mismatch


const nums = [1, 2, 2, 4]
const n = nums.length;
const v = new Array(n + 1).fill(0);
let missing = 0, duplicate = 0;

for (const num of nums) {
    v[num]++;
}

for (let i = 1; i < v.length; i++) {
    if (v[i] === 2) {
        duplicate = i;
    }
    if (v[i] === 0) {
        missing = i;
    }
}

console.log([duplicate, missing])