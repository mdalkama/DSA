// Duplicate Zeros

const arr = [1, 5, 2, 0, 6, 8, 0, 6, 0]

let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) count++;
}

let i = arr.length - 1;
let j = arr.length + count - 1;

let last = arr.length - 1;

while (i >= 0) {

    if (j < arr.length) {
        arr[j] = arr[i];
    }

    if (arr[i] === 0) {
        j--;
        if (j < arr.length) {
            arr[j] = 0;
        }
    }

    i--;
    j--;
}

console.log(arr);