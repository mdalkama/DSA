// Accept the parameters and calculate the Compound Interest & print it on STDOUT (Use Math class methods)


function calculateCompoundInterest (principleAmnt, time, intrestRate){
    console.log(principleAmnt + (principleAmnt * time * intrestRate)/100)
}

calculateCompoundInterest(10000, 20, 10)