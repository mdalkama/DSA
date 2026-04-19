// Ceiling of a number in a sorted array

const nums = [1, 3, 5, 8, 10, 12, 15, 18, 20]
const x = 5;

let answer = -1;

for (let i of nums) {
    if (i >= x) {
        answer = i;
        break;
    }
}

console.log(answer);