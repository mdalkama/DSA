// Accept the three sides of triangle and calculate the area using Heron's formula


function areaOfTriangle(a, b, c) {
    semiP = (a + b + c)/2
    const area = Math.sqrt(semiP * ((semiP - a) * (semiP - b) * (semiP - c )))
    console.log(area)
}

areaOfTriangle(5, 6, 7)