// Accept a number and print its reverse

function printReverse(num) {
    let revNum = 0
    while (num >= 1) {
        revNum = revNum * 10 + Math.floor(num % 10)
        num = num / 10
    }
    console.log(revNum)
}

printReverse(97987)