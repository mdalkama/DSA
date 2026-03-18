// Accept two numbers from user and swap their values (Part 2 - Swap without using third variable)


function swapWithVar(a,b){
    const temp = a;
    a = b;
    b = temp
    console.log("a:",a)
    console.log("b:",b)
}

swapWithVar(5,8)


function swapWithoutVar(a,b){
    a = a + b;
    b = a - b
    a = a - b
    console.log("a:",a)
    console.log("b:",b)
}

swapWithoutVar(70,80)
