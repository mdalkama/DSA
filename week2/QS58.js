// Take n integer inputs from user and store them in an array. Now, copy all the elements into another array in reverse order and print it.

let n = prompt("enter number: ");

let arr = Array.from({ length: n });

let revArr = Array.from({ length: n });

for (let i = 0; i < n; i++) {
    arr[i] = prompt("enter a num: ");
}

let i = 0

while( i < Math.floor(n/2)){
    revArr[i] =  arr[n-1-i]
    revArr[n-1-i] = arr[i]
    i++
}

if(n/2 > Math.floor(n/2)){
    revArr[Math.floor(n/2)] = arr[Math.floor(n/2)]
}

console.log(arr);
console.log(revArr);
