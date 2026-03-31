// Minimum Number of Seat Everyone

const seat = [3, 1, 5]
const student = [2, 7, 4]

seat.sort((a, b) => a - b)
student.sort((a, b) => a - b)

let step = 0

for (let i = 0; i < seat.length; i++) {
    step += Math.abs(seat[i] - student[i])
}

console.log(step)