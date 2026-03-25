// Accept a number and check if it is a strong number or not(Sum of factorial of each digit, Ex: 145 = 1! + 4! + 5! = 145)


function factorial(num) {
    let fact = 1
    for (let i = 1; i <= num; i++) {
        fact *= i
    }
    console.log(fact)
    return fact
}

function isStrongNum(num) {
    let sum = 0
    while (num >= 1) {
        sum += factorial(Math.floor(num % 10));
        num = num / 10
    }
    return sum
}


const num = 145

const strongNumber = isStrongNum(num)

if (strongNumber == num) {
    console.log("This is a strong number")
} else {
    console.log("This is not a strong number")
}