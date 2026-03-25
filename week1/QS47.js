// Right Triangle - Number Pattern


function NumTriangle(num) {
    let numCont = ""
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            numCont += j
        }
        console.log(numCont)
        numCont = ""
    }
}

NumTriangle(5)