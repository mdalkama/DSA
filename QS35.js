// Sum of digits of a number(Ex: 936 = 18)


function sumOfDigits(num) {
    let sum = 0
    while (num >= 1) {
        sum += Math.floor(num % 10)
        num = num / 10
    }
    console.log(sum)
}

sumOfDigits(936)