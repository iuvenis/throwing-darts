var throws = [];
var throwSum;
function scoreThrows(throws) {
  var points = [];
  if (isNaN(throws[0]) === true) {
    return 'There are no scores to calculate';
  }
  for (i = 0; i < throws.length; i++) {
    if (throws[i] > 10) {
      points.push(0);
    }
    if (throws[i] <= 10 && throws[i] >= 5) {
      points.push(5);
    }
    if (throws[i] < 5) {
      points.push(10);
    }
  }

  console.log(points);
  throwSum = points.reduce(function(a, b) {
  return a + b;
});
  if (throwSum > 25) {
    throwSum += 100;
  } else {
    console.log('Sorry Charlie');
  }
  console.log(throwSum);
}

scoreThrows([1, 5, 11]);