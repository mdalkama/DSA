// Accept size n from user and create an n size array then take n inputs into it and finally print the sum & average of all elements.

let n = prompt("enter a number")
let sum = 0

for(let i = 0; i<n; i++){
    sum += +prompt(`enter [${i}] element:`)
}

console.log(`sum: ${sum}`);
console.log(`Avg: ${sum/n}`)
