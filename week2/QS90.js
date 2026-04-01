// Min Max Game - Array


let arr = [1, 3, 5, 2, 4, 8, 2, 2]
let finalArr = []
while (arr.length > 1) {
    let min = true
    finalArr = []
    for (let i = 0; i < arr.length; i += 2) {
        if (min) {
            finalArr.push(Math.min(arr[i], arr[i + 1]))
        } else {
            finalArr.push(Math.max(arr[i], arr[i + 1]))
        }
        min = !min
    }
    arr = finalArr
}

console.log(finalArr)