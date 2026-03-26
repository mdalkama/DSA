// Strong number using methods.


function isStrongNumber(num) {
    let tempNum = num
    let strong = 0;

    while (tempNum > 0) {
        strong += factorial(Math.floor(tempNum % 10));
        tempNum = Math.floor(tempNum / 10)
    }
    return strong == num

}

function factorial(n) {
    let fact = 1
    for (let i = n; i > 0; i--) {
        fact *= i
    }
    return fact
}

console.log((isStrongNumber(999)))