// https://www.hackerrank.com/challenges/mark-and-toys/problem

function maximumToys(prices, k) {
    const array = prices.sort((a, b) => a - b);
    const arraySize = array.length;
    let budget = k;
    let toysCount = 0;

    for (let i = 0; i < arraySize; i++) {
        if (budget >= array[i]) {
            toysCount++;
            budget -= array[i];
        }
    }

    return toysCount;
}