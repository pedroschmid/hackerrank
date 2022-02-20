// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
    const arraySize = arr.length;
    const sortedArray = arr.sort((a, b) => a - b);

    let postives = 0;
    let negatives = 0;
    let zeros = 0;

    sortedArray.forEach((item) => {
        if (item > 0) {
            postives++;
        }

        if (item < 0) {
            negatives++;
        }

        if (item === 0) {
            zeros++;
        }
    })

    console.log(postives / arraySize);
    console.log(negatives / arraySize);
    console.log(zeros / arraySize);
}