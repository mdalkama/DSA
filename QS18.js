// Accept three numbers and print the greatest among them

function greatestOfThree(a, b, c) {
    if (a > b && a > c) {
        return a
    }
    else if (b > a && b > c) {
        return b
    } else {
        return c
    }
}
console.log(greatestOfThree(5, 61, 7))