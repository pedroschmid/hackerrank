// https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
    const sortedArray = arr.sort((a, b) => a - b);

    const minSumm = sortedArray.reduce((a, b) => a + b) - arr.slice(-1)[0];
    const maxSumm = sortedArray.reduce((a, b) => a + b) - arr[0];

    console.log(minSumm, maxSumm)
}