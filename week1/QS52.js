// V Pattern - Min Height = 3



function vPattern(num) {
    let value = ""
    for (let i = num - 1; i >= 0; i--) {
        value = " ".repeat(num - i + 1) + "*"
        if (((i * 2) - 1) > 0) {
            value += " ".repeat((i * 2) - 1)
            value += "*"
        }
        console.log(value);
        value = ""
    }

}

vPattern(3)