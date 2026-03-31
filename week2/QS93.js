// Transpose Matrix

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let transpose = new Array(matrix[0].length);
for (let i = 0; i < matrix[0].length; i++) {
    transpose[i] = new Array(matrix.length);
    for (let j = 0; j < matrix.length; j++) {
        transpose[i][j] = matrix[j][i];
    }
}
console.log(transpose)