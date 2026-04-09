// Check if Numbers Are Ascending in a Sentence


const s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles"
const token = s.split(" ")

let numArr = []

for (let i = 0; i < token.length; i++) {
    if (!Number.isNaN(+token[i])) {
        numArr.push(+token[i])
    }
}

for (let i = 0; i < numArr.length - 1; i++) {
    if(numArr[i] >= numArr[i+1]){
        console.log(false)
    }
}