// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(candles) {
    const sortedArray = candles.sort((a, b) => a - b);
    const maxNumber = sortedArray.slice(-1)[0];

    const maxNumberCount = sortedArray.filter((item) => item === maxNumber).length;
    return maxNumberCount;
}