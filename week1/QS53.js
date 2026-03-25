// X Pattern

function pattern(num) {
    let value = ""
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {
            if (i == j || i + j == num + 1)
                value += "*"
            else
                value += " "
        }
        console.log(value)
        value = ""
    }

}

pattern(7)