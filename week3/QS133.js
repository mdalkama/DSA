// Valid Mountain Array

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const n = arr.length;

if (n < 3) return false;

let i = 0;
let j = arr.length - 1
while (arr[i] < arr[i + 1] && i < arr.length - 1) i++
while (arr[j - 1] > arr[j] && j >= 0) j--


if (i == j && i < arr.length - 1 && j > 0) console.log(true)
else console.log(false)