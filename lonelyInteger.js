// https://www.hackerrank.com/challenges/one-week-preparation-kit-lonely-integer/problem

function lonelyinteger(a) {
  const array = a;
  
  const uniqueItem = array.filter(
    (item) => array.indexOf(item) === array.lastIndexOf(item)
  )[0];

  return uniqueItem;
}
