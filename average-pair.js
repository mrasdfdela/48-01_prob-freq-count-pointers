// Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.

function averagePair(arr,avg) {
  let [left, right] = [0, arr.length-1];
  let pairAvg;
  while (left < right) {
    pairAvg = (arr[left] + arr[right])/2;
    if (pairAvg === avg) {
      return true;
    } else if (pairAvg < avg) {
      left ++;
    } else {
      right--;
    }
  }
  return false;
}

module.exports = { averagePair };