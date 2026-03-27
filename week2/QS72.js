// You are given two arrays of **equal length**: An **integer array** A[] and a **character array** B[], where each character is one of 'a', 'b', or 'c'. Find the **minimum** value of the expression: min(sum of values linked with 'a' + sum of values linked with 'b', sum of values linked with 'c').


const A = [2, 3, 5, 7, 1]
const B = ['a', 'b', 'a', 'c', 'b']

let sumA = 0
let sumB = 0
let sumC = 0

for (let i = 0; i < A.length; i++) {
    if (B[i] == 'a') {
        sumA += A[i]
    } else if (B[i] == 'b') {
        sumB += A[i]
    } else if (B[i] == 'c') {
        sumC += A[i]
    }
}

console.log(`sumA: ${sumA}\nsumB: ${sumB}\nsumC: ${sumC}`)

console.log(Math.min(sumA + sumB, sumC))