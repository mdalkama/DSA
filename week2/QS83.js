// Count Operations to Obtain Zero

let num1 = 2
let num2 = 3
let operations = 0
while (num1 != 0 && num2 != 0) {
    if (num1 >= num2) {
        num1 -= num2
    } else {
        num2 -= num1
    }
    operations++
}

console.log(operations)