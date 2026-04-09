// Determine Whether Matrix Can Be Obtained By Rotation

var rotate = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]]
        }
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i].reverse()
    }
}

var compareRotate = function (mat, target) {
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            if (mat[i][j] != target[i][j]) {
                return false
            }
        }
    }
    return true
}

var findRotation = function (mat, target) {
    for (let i = 0; i < 4; i++) {
        if (compareRotate(mat, target)) {
            return true
        }
        rotate(mat)
    }
    return false
};

console.log(findRotation([[0, 1, 2], [3, 4, 5], [6, 7, 8]], [[6, 3, 0], [7, 4, 1], [8, 5, 2]]))