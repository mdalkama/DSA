// Triangle Pattern


function triangle(num) {
    let value = ""

    for (let i = 0; i < num; i++) {
        value = " ".repeat(num - i) + "*".repeat(i * 2 + 1)
        console.log(value)
        value = ""
    }

}
triangle(5)