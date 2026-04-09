// Max Consecutive Ones



const nums = [1, 1, 0, 1, 1, 1, 1, 0, 1, 1]


let max = 0
for (let i = 0; i < nums.length; i++) {
    let count = 0;

    while (nums[i] == 1) {
        count++
        i++
    }
    if (max < count){
        max = count
    }
}

console.log(max)