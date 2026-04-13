// Merge Intervals


const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]


intervals.sort((a, b) => a[0] - b[0]);

let singleArr = intervals[0];
let answer = [];

for (let i = 1; i < intervals.length; i++) {

    if (intervals[i][0] <= singleArr[1]) {
        singleArr[1] = Math.max(singleArr[1], intervals[i][1]);
    }
    else {
        answer.push([...singleArr]);
        singleArr = intervals[i];
    }
}

answer.push([...singleArr]);

console.log(answer);