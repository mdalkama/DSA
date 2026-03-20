// Print the sum of all even & odd numbers in a range separately.


function sumEvenOdd(n) {
    let even = 0
    let odd = 0
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            even += i
        } else {
            odd += i
        }
    }
    console.log(`Odd : ${odd}`)
    console.log(`Even : ${even}`)
}
sumEvenOdd(10)