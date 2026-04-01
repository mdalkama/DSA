// Minimum Sum of Four Digit Number After Splitting Digits

let num = 2932

let result = String(num).split('').sort((a, b) => a - b)

const resultNum = (+result[0] * 10 + +result[2]) + (+result[1] * 10 + +result[3])

console.log(resultNum)