function average(array) {
  var sum = array.reduce((a, b) => a + b, 0);
  console.log("this is SUM " + sum);
  // sum / array.length;
}
module.exports = average;
