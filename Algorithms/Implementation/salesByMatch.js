// https://www.hackerrank.com/challenges/sock-merchant/problem

function sockMerchant(n, ar) {
    const size = n;
    const sortedSocks = ar.sort((a, b) => a - b);

    let pairs = 0;

    for (let i = 0; i < size; i++) {
        if (sortedSocks[i] === sortedSocks[i+1]) {
            i++;
            pairs++;
        }
    }

    return pairs;
}