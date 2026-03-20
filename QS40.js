// Print \hello\" until user gives wrong input using do while"


function hello() {
    let val = ''
    do {
        val = prompt("enter data:")
    } while (val !== 'hello')
}

hello()