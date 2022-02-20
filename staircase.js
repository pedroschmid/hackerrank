// https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
    let blankSpace = n - 1;

    for (let i = 0; i < n; i++) {
        console.log(' '.repeat(blankSpace) + '#'.repeat(i+1));
        blankSpace--;
    }
}