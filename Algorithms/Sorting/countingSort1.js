// https://www.hackerrank.com/challenges/one-week-preparation-kit-countingsort1/problem

function countingSort(arr) {
  const array = arr;

  const integerArray = new Array(100).fill(0);

  array.forEach((item, index, arr) => {
    integerArray[array[index]]++;
  });

  return integerArray;
}
