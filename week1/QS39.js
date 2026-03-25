// Automorphic number(Ex: 5 = 25 = 625 = 390625, 6 = 36, 76 = 5776)

function isAutomorphicNumber(num) {
    const sqr = num * num;
    const tempNum = num
    let digit = 0
    while (num >= 1) {
        digit++
        num = num / 10
    }
    return (sqr % 10 ** digit == tempNum)
}

const automorphicNumber = isAutomorphicNumber(76)

if (automorphicNumber) {
    console.log("This is a automorphic number")
} else {
    console.log("This is not a automorphic number")
}