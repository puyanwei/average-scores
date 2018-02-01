function average(array) {
  var sum = array.reduce((a, b) => a + b, 0);
  number = sum / array.length;
  return Math.round(number);
}
