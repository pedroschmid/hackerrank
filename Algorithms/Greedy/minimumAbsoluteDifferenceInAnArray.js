// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem

function minimumAbsoluteDifference(arr) {
  arr.sort((a, b) => a - b);

  let min = Math.abs(arr[0] - arr[1]);
  let diff;

  for (let i = 1; i < arr.length; i++) {
    diff = Math.abs(arr[i] - arr[i + 1]);

    if (diff < min) {
      min = diff;
    }
  }

  return min;
}
