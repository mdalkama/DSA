// Right Triangle - Alphabet Pattern

function alphabetTriangle(num) {

    let alphabetCont = ""
    for (let i = 0; i < num; i++) {
        for (let j = 0; j <= i; j++) {
            alphabetCont += String.fromCharCode(65 + j)
        }
        console.log(alphabetCont)
        alphabetCont = ""
    }
}
alphabetTriangle(5)