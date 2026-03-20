// Make a choice based calculator using do while

function calc(method, op1, op2) {
    switch (method) {
        case '+':
            return op1 + op2
        case "-":
            return op1 - op2
        case "*":
            return op1 * op2
        case "/":
            return op1 / op2
        case "%":
            return op1 % op2
    }
}

console.log(calc("%", 5, 7))