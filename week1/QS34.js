// Separate each digit of a number and print it on a new line(Ex - 123 -> OP: 3, 2, 1)

function seperateNum(num) {
    while (num >= 1) {
        console.log(Math.floor(num % 10))
        num = num / 10
    }
}

seperateNum(123)