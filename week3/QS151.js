// Container With Most Water


const height = [8, 7, 2, 1]

let start = 0;
let end = height.length - 1
let max = 0

while(start < end){
    const totalWater = (end - start) * Math.min(height[start], height[end])
    if (totalWater > max){
        max = totalWater
    }
    if(height[start] > height[end]){
        end--
    }else{
        start++
    }
}

console.log(max)