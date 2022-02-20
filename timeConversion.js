// https://www.hackerrank.com/challenges/time-conversion/problem

function formatTime(time, isPM = false) {
  if (isPM && time !== "12") return parseInt(time) + 12;
  if (isPM && time === "12") return "12";
  if (!isPM && time === "12") return "00";

  return time.replace(/[^0-9]/g, "");
}

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
