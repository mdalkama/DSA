// Valid Sudoku

const board =
    [["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

const rows = Array.from({ length: 9 }, () => Array(9).fill(false));
const cols = Array.from({ length: 9 }, () => Array(9).fill(false));
const boxes = Array.from({ length: 9 }, () => Array(9).fill(false));

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        if (board[i][j] !== '.') {
            let num = board[i][j].charCodeAt(0) - '1'.charCodeAt(0);
            let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            if (rows[i][num] || cols[j][num] || boxes[boxIndex][num]) {
                console.log(false)
            }

            rows[i][num] = cols[j][num] = boxes[boxIndex][num] = true;
        }
    }
}

console.log(true)