// Mirror Image

const arr = [[1, 1, 0], [1, 0, 1], [0, 0, 0]]

for (let i = 0; i < arr.length; i++){
    let j = 0;
    let k = arr[i].length - 1
    while(j<k){
        [arr[i][j], arr[i][k]] = [+!arr[i][k],+!arr[i][j]]
        j++
        k--
    }
    if(j == k){
        arr[i][j] = +!arr[i][j]
    }
}

console.log(arr)