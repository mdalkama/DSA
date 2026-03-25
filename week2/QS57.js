// Check if array is sorted in increasing order or not. (Ex 1 - { 1, 5, 8, 9, 10, 15 } - OP = \YES\"

const arr = [1, 5, 8, 9, 10, 15]

let flag = 1

for(let i = 0; i < arr.length-1; i++){
    if(arr[i] > arr[i+1]){
        flag = 0
    }
}

if(flag){
    console.log(`YES`)
}else{
    console.log(`NO`)
}