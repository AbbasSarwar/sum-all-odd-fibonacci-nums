module.exports = function (num) {
  let prevNum = 1; 
  let currNum = 1;
  let sum = 0;
  while (prevNum <= num) {
    if (prevNum % 2 !== 0) { 
      sum += prevNum;
    }
    let nextNum = prevNum + currNum;
    prevNum = currNum;
    currNum = nextNum;
  }
  return sum
}
