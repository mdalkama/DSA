// Find circumference and area of circle


function circumferenceOfCircle(radius){
    return 2 * (22/7) * radius
}

function areaOfCircle(radius){
    return (22/7) * Math.pow(radius, 2)
}

console.log(circumferenceOfCircle(8))
console.log(areaOfCircle(8))