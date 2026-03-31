// Smallest Index With Equal Value

let arr = [0, 1, 2, 3]
let result = -1
for (let i = 0; i < arr.length; i++){
    if(i%10 == arr[i]){
        result = i
        break
    }
}

console.log(result)