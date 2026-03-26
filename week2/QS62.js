// Linear Search an array - If element found print the index, else -1

let arr = [1,56,12,55,34,87,29,89];
let key = prompt("Enter a number you want to find: ")
let isFound = 0

for(let i = 0; i < arr.length; i++){
    if(key == arr[i]){
        console.log(`element found at index : ${i}`)
        isFound = 1
    }
}
if (!isFound){
    console.log(-1)
}