//  Print all the factors of a number.

function factor(n){
    for(let i = 1; i <= n/2; i++){
        if(n%i == 0)
        console.log(i)
    }
}

factor(32)