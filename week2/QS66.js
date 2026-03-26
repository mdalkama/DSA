// Print the count of subarrays whose sum is equal to the target. (Ex - {1,2,3,7,5}, T = 12 O/P - 2 - [ {2,3,7}, {7,5} ] - Both subarrays have sum 12)


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const key = 15;

let start = 0;
const finalArr = [];
let sum = 0
const temp = []

for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i]);
    sum += arr[i];

    while (sum > key) {
        sum -= temp.shift()
    }

    if (sum == key) {
        finalArr.push([...temp])
    }
}
console.log(finalArr)