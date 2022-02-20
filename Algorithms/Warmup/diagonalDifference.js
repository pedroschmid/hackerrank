// https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
    const matrixSize = arr.length;
    let diagonalDiff = 0;
    let reverseDiagonalDiff = 0;

    for (let i = 0; i < matrixSize; i++) {
        for (let j = 0; j < matrixSize; j++) {
            // main diagonal
            if (i === j) {
                diagonalDiff += arr[i][j]
            }

            // reverse diagonal
            if (i === (matrixSize - j - 1)) {
                reverseDiagonalDiff += arr[i][j]
            }
        }
    }

    const absoluteDiff = Math.abs(diagonalDiff - reverseDiagonalDiff)
    return absoluteDiff;
}