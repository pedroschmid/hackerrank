// https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  const string = s;
  const isPM = string.match("PM");

  return isPM
    ? string
        .split(":")
        .map((item, index) =>
          index === 0 ? formatTime(item, true) : formatTime(item)
        )
        .join(":")
    : string
        .split(":")
        .map((item, index) =>
          index === 0 ? formatTime(item) : formatTime(item)
        )
        .join(":");
}
