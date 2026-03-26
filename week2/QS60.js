// Array left rotation by K elements

const arr = [1, 2, 3, 4, 5]
let k = prompt("enter number of rotation:")

for(let h = 1; h<=k%arr.length; h++){
    let temp = arr[0]
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1]
    }
    arr[arr.length - 1] = temp
}

console.log(arr)