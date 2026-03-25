// Find the second greatest element(Ex: { 2, 96, 69, 77, 145, 20} = Second greatest element = 96)

let arr = [2, 96, 69, 77, 145, 20]

let max = Math.max(arr[0], arr[1])
let max2 = Math.min(arr[0], arr[1])

for(let i = 2; i<arr.length;i++){
    if(max < arr[i]){
        max2 = max;
        max = arr[i]
    }
}

console.log(`2nd max: ${max2}`)