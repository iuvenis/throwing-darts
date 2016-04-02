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

}

scoreThrows([1, 5, 11]);